class PagesUrlConfig {
	private root = '/app'

	HOME = this.root
	TASKS = `${this.root}/tasks`
	HABITS = `${this.root}/habits`
	TIMER = `${this.root}/timer`
	TIME_BLOCKING = `${this.root}/time-blocking`
	SETTINGS = `${this.root}/settings`
	STATISTICS = `${this.root}/statistics`
}

export const APP_PAGES = new PagesUrlConfig()
