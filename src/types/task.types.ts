import { IRoot } from '@/types/root.types'

export enum ETaskPriority {
	Low = 'low',
	Medium = 'medium',
	High = 'high'
}

export interface ITaskResponse extends IRoot{
	name: string
	isCompleted: boolean

	priority?: ETaskPriority
}

export type TaskTypeFromState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>

