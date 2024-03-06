import { IRoot } from '@/types/root.types'

export interface IPomodoroRoundResponse extends IRoot{
	totalSeconds: number

	isCompleted?: boolean
}

export interface IPomodoroSessionResponse extends IRoot{
	rounds?: IPomodoroRoundResponse[] 
	isCompleted?: boolean
}

export type PomodoroSessionType = Partial<Omit<IPomodoroSessionResponse, 'id' | 'createdAt' | 'updatedAt'>>

export type PomodoroRoundType = Partial<Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>>