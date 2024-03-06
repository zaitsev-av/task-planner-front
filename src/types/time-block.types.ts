import { IRoot } from '@/types/root.types'

export interface ITimeBlockResponse extends IRoot{
	name: string
	order: number
	duration: number

	color?: string
}

export type TimeBlockTypeFormState = Partial<Omit<ITimeBlockResponse, 'createdAt' | 'updatedAt'>>