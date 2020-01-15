import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'
import { visitFunctionBody } from 'typescript'

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        }
    },[darkMode])

    return [darkMode, toggleMode]
}