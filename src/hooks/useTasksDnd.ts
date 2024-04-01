import type { DropResult } from '@hello-pangea/dnd';

import { FILTERS } from '@/constants/filters.data';

export function useTasksDnd() {
	// const {updateTasks} = useUpdateTasks()
	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;

		const destinationColumnId = result.destination.droppableId;

		if (destinationColumnId === result.source.droppableId) return;
		//todo вынести в enum
		if (destinationColumnId === 'completed') {
			//todo запрос на сервер с изменениями
			return;
		}
		const newCreatedAt = FILTERS[destinationColumnId].format();
		//todo обновляем данные с новой датой
	};
	return { onDragEnd };
}
