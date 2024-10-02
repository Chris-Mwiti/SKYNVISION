import { Upload, X } from "lucide-react"
import { useState, useCallback } from "react"
import Dropzone, {useDropzone} from 'react-dropzone'
import { Button } from "../ui/button";
export default function ImageDropZone() {
   const [images, setImages] = useState<string[]>([]); // State to store image preview URLs
   const thumbnailImages:string[] = [];
     // Handle file drops
  const onDrop = (acceptedFiles: File[]) => {
    console.log(acceptedFiles)
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        // FileReader result is a base64 DataURL, update the state with it
        const imageUrl = reader.result as string;
        setImages((prevImages) => [...prevImages, imageUrl]); // Add new DataURL to the state
      };

      reader.onerror = () => {
        console.error("File reading failed");
      };

      // Read the file as DataURL (which can be used in img tags)
    });
  }

    
    
    const removeImage = (img:string) => {
        const filteredImages = images.filter((image) => image !== img);
        setImages(filteredImages)
        return filteredImages;
    }
    console.log(images)
    console.log(thumbnailImages)
  return (
    <div className="w-full max-h-[400px] h-full flex flex-col space-y-3 border rounded-md">
        <Button variant={"default"}>Upload</Button>
        <Dropzone onDrop={onDrop}>
            {({getRootProps, getInputProps}) => (
               <div className="w-full max-h-[400px] h-full border rounded-md">
                      <div className={`w-full h-full border border-dashedflex p-3 rounded-md items-center justify-center bg-slate-400/10 `} {...getRootProps()}>
                          <input {...getInputProps()} />
                          <div className="space-y-5 text-foreground flex flex-col justify-center items-center">
                              <Upload className="size-12" />
                              <p className="text-xl font-medium">Select some files</p>
                          </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                          {images.map((img, index) => (
                              <span className="size-16 rounded-md relative">
                                  <X className="absolute top-0 right-0 size-4 hover:stroke-red-400" onClick={() => removeImage(img)} />
                                  <img className="size-full object-contain rounded-md" alt={`${index}`} src={img} />
                              </span>
                          ))}
                      </div>

                  </div>
              )}
        </Dropzone>
    </div>
  )
}
