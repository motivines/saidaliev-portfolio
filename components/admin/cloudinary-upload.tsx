'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';

type UploadedImage = { url: string; alt: string };

export function CloudinaryUpload() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    if (!cloudName || !preset) return;

    for (const file of acceptedFiles) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', preset);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`);
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) setProgress(Math.round((event.loaded / event.total) * 100));
      };
      xhr.onload = () => {
        const response = JSON.parse(xhr.responseText);
        setImages((prev) => [...prev, { url: response.secure_url, alt: file.name }]);
        setProgress(0);
      };
      xhr.send(formData);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: { 'image/*': [] } });

  return (
    <div className="space-y-4">
      <div {...getRootProps()} className="cursor-pointer rounded-lg border-2 border-dashed p-6 text-center">
        <input {...getInputProps()} aria-label="Upload project images" />
        <p>Drag & drop project images here, or click to browse.</p>
      </div>
      {progress > 0 && <div className="h-2 rounded bg-muted"><div className="h-2 rounded bg-primary" style={{ width: `${progress}%` }} /></div>}
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={`${image.url}-${index}`} className="space-y-2 rounded border p-2">
            <div className="relative h-32 w-full overflow-hidden rounded">
              <Image src={image.url} alt={image.alt} fill className="object-cover" />
            </div>
            <input
              className="w-full rounded border px-2 py-1 text-sm"
              value={image.alt}
              onChange={(e) => {
                const next = [...images];
                next[index].alt = e.target.value;
                setImages(next);
              }}
              aria-label={`Alt text for image ${index + 1}`}
            />
            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={() => index > 0 && setImages((prev) => {
                const next = [...prev];
                [next[index - 1], next[index]] = [next[index], next[index - 1]];
                return next;
              })}>↑</Button>
              <Button type="button" variant="outline" onClick={() => index < images.length - 1 && setImages((prev) => {
                const next = [...prev];
                [next[index + 1], next[index]] = [next[index], next[index + 1]];
                return next;
              })}>↓</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
