/** @format */

// utils/parseBlogContent.ts
export const parseBlogContent = (content: string) => {
	// Replace [youtube-video]URL[/youtube-video] with iframe HTML
	return content?.replace(
		/\[youtube-video\](.*?)\[\/youtube-video\]/g,
		(_, url) => {
			try {
				const videoId = new URL(url).searchParams.get('v');
				// if (videoId) {
				// 	return `<div class="my-6 w-full h-[400px]">
				//     <iframe
				//       width="100%"
				//       height="100%"
				//       src="https://www.youtube.com/embed/${videoId}"
				//       title="YouTube video player"
				//       frameborder="0"
				//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				//       allowfullscreen
				//     ></iframe>
				//   </div>`;
				// }
				return '';
			} catch {
				return '';
			}
		},
	);
};
