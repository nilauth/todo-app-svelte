export default function getCompletedId(event: MouseEvent): string {
	const targetElement = event.target as HTMLElement;
	if (targetElement.parentElement) {
		const completedTaskId = targetElement.parentElement.id;
		console.log('Task completed for element with ID:', completedTaskId);
		return completedTaskId;
	}
	return '';
}
