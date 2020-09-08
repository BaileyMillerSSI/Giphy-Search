import { ShareDataExtended } from "../models/Share";

export const downloadAndShare = async (
  title: string,
  uri: string
): Promise<void> => {
  var response = await fetch(uri);

  if (response.ok) {
    const blob = await response.blob();
    console.log(`Size: ${blob.size} Type: ${blob.type}`);
    const _file = new File([blob], "Image.gif", { type: blob.type });

    const shareData: ShareDataExtended = {
      title: title,
      text: "Checkout this GIF",
      files: [_file],
    };

    if (navigator.share && navigator.canShare(shareData as any)) {
      await navigator.share(shareData as any);
    }
  }
};
