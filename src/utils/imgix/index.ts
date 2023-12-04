import { ImageLoaderProps } from "next/image";


const format = (imgUrl: string) => {
  if (imgUrl == null) {
    return '';
  }
  return `${imgUrl}?fit=fillmax&fill-color=white&w=200&h=200`;
};

const microCMSLoader = ({ src }: ImageLoaderProps) => {
  return `${src}?auto=format`
}

export { format,  microCMSLoader };
