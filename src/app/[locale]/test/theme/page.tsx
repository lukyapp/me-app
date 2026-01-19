import {Header} from "@/components/header";
import {ThemeLine} from "@/components/theme-line";
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Monitor, Moon, Sun} from "lucide-react"

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Header/>

            <div className="container mx-auto px-4 py-12">
                <div className="mx-auto max-w-2xl space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            Light & Dark Mode
                        </h2>
                        <p className="text-muted-foreground">
                            Toggle between light, dark, and system themes using the button in the header.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        <Card className="text-center">
                            <CardHeader className="pb-2">
                                <Sun className="mx-auto h-8 w-8 text-amber-500"/>
                                <CardTitle className="text-lg">Light</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Bright and clean appearance</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader className="pb-2">
                                <Moon className="mx-auto h-8 w-8 text-indigo-500"/>
                                <CardTitle className="text-lg">Dark</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Easy on the eyes at night</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader className="pb-2">
                                <Monitor className="mx-auto h-8 w-8 text-muted-foreground"/>
                                <CardTitle className="text-lg">System</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Follows your OS preference</CardDescription>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Preview Components</CardTitle>
                            <CardDescription>
                                See how different components look with the current theme.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                <Button>Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="destructive">Destructive</Button>
                            </div>
                            <div className="rounded-lg bg-muted p-4">
                                <p className="text-sm text-muted-foreground">
                                    This is a muted background area demonstrating how subtle UI elements adapt to the
                                    current theme.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <ThemeLine />
                </div>
            </div>
        </main>
    )
}