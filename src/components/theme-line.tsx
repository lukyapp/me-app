'use client'

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export function ThemeLine() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return (
            <p className="text-center text-sm text-muted-foreground">
                Current theme: <span className="font-medium text-foreground">…</span>
            </p>
        )
    }

    return (
        <p className="text-center text-sm text-muted-foreground">
            Current theme: <span className="font-medium text-foreground">{theme}</span>
        </p>
    )
}