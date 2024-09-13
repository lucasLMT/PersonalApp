function getAllDaysOfWeekStartingWithSunday() {
    const navigatorLanguage = navigator.language
    const options: Intl.DateTimeFormatOptions = { weekday: "short" }
    const formatter = new Intl.DateTimeFormat(navigatorLanguage, options)

    const daysOfWeek = []
    const today = new Date()
    const firstDayOfWeek = new Date();
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay()) // Adjust to start on Sunday

    for (let i = 0; i < 7; i++) {
        const date = new Date(firstDayOfWeek)
        date.setDate(date.getDate() + i)
        const day = formatter.format(date)
        daysOfWeek.push({
            weekday: day.charAt(0).toUpperCase() + day.slice(1, 3),
            isToday: i === today.getDay()
        })
    }

    return daysOfWeek;
}

export {
    getAllDaysOfWeekStartingWithSunday
}
