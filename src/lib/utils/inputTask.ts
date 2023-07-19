export function extractTitleAndHashtags(input: string): { title: string; hashtags: string[] } {
	const titleRegex = /^(.*?)(\s+#\S+)*$/;
	const matches = input.match(titleRegex);

	if (matches && matches.length >= 2) {
		const title = matches[1].trim();

		const hashtagRegex = /#\S+/g;
		const hashtags = input.match(hashtagRegex)?.map((match) => match.slice(1)) || [];

		return { title, hashtags };
	}

	// Return default values or throw an error if needed
	return { title: '', hashtags: [] } as { title: string; hashtags: string[] };
}
