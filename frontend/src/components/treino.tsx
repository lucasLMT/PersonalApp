import { FC, useState } from "react"
import { Card, Button, CardBody, CardHeader, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react"
import { getAllDaysOfWeekStartingWithSunday } from "../utils/date"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumbbell, faRepeat } from "@fortawesome/free-solid-svg-icons"

const mockExercises = [
    {
        videoUrl: "",
        imageUrl: "https://ciaathleticasjc.com.br/wp-content/uploads/2023/06/Cia-SJC-Exercicio-para-afinar-cintura-2-Autores-Grupo-S2-Marketing-Freepik-1536x1024.jpg",
        title: "Abdominal Oblíquo",
        description: "Coloque as mãos na nuca, mas não entrelace os dedos. Mantenha o queixo afastado do peito.",
        seriesData: {
            series: 3,
            repetitions: [15, 12, 10, 8],
            weight: [70, 80, 90, 100]
        },
    },
    {
        videoUrl: "",
        imageUrl: "https://blogeducacaofisica.com.br/wp-content/uploads/2019/11/exercicios-para-core-os-11-melhores-para-ativacao-e-fortalecimento.jpg",
        title: "Abdominal - Prancha",
        description: "Deite-se de barriga para baixo, apoie o antebraço no chão, mantenha a palma das mãos voltadas para baixo..",
        seriesData: {
            series: 3,
            repetitions: [15, 12, 10],
            weight: [15, 20, 25]
        },
    }
]

const Treino: FC = () => {
    const [open, setOpen] = useState(false);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const daysOfTheWeek = getAllDaysOfWeekStartingWithSunday()
 
    const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(!open);
        setExerciseIndex(Number(e.currentTarget.getAttribute("data-value")));
    }

    return (
        <div className="flex w-full flex-col mx-auto gap-4 mt-3 items-center">
            <Typography variant="h3" className='text-center' color="blue-gray">Treino</Typography>
            <ul id="weekCalendar" className="flex gap-2 border-b-2 pb-2 border-blue-gray-300">
                {
                    daysOfTheWeek.map((day, index) => {
                        const classBase = "w-12 h-12 flex p-2 font-medium text-sm rounded-full items-center justify-center border-2"
                        const todayColor = "border-orange-900 bg-orange-900 text-orange-50"
                        const defaultColor = "border-blue-gray-500 even:bg-blue-gray-500 even:text-blue-gray-50"
                        const className = `${classBase} ${day.isToday ? todayColor : defaultColor}`
                        return (
                            <Typography
                                key={`WeekDay${index}`}
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className={className}
                            >
                                {day.weekday}
                            </Typography>
                        )
                    })
                }
            </ul>
            <ul id="ExercisesList" className="flex flex-col gap-4">
                {
                    mockExercises.map((exercise, index) => {
                        return (
                            <Card key={`Card${index}`} className="w-full max-w-[48rem] flex-row m-0 p-0 items-center">
                                <CardHeader className="h-full w-1/4 m-2 mr-0">
                                    <img 
                                        src={exercise.imageUrl} 
                                        alt={exercise.title}
                                        className="h-full w-full object-cover aspect-square object-center"
                                    />
                                </CardHeader>
                                <CardBody className="w-3/4 p-4 flex flex-col">
                                    <Typography variant="h6" color="blue-gray" className="text-center">
                                        {exercise.title}
                                    </Typography>
                                    <div id="gridRepetition" className="w-1/2 flex flex-col p-2 bg-blue-gray-50 rounded-md mt-2">
                                        <ul className="w-full flex flex-row">
                                            <li className="w-1/5 text-center">
                                                <FontAwesomeIcon icon={faRepeat} />
                                            </li>
                                            {exercise.seriesData.repetitions.map((serie, index) => (
                                                <li key={index} className="w-1/5 text-center">
                                                    <Typography variant="small">{serie}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="w-full flex flex-row">
                                            <li className="w-1/5 text-center">
                                                <FontAwesomeIcon icon={faDumbbell} />
                                            </li>
                                            {exercise.seriesData.weight.map((weight, index) => (
                                                <li key={index} className="w-1/5 text-center">
                                                    <Typography variant="small">{weight}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Typography variant="small" color="blue-gray" className="mt-2">
                                        {exercise.description}
                                    </Typography>
                                    <Button className="mt-2 w-min self-end" onClick={handleOpen} data-value={index}>
                                        Detalhes
                                    </Button>
                                </CardBody>
                            </Card>
                        )
                    })
                }
            </ul>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader className="justify-center">Detalhes</DialogHeader>
                <DialogBody>
                    <video className="h-full w-full rounded-lg" controls autoPlay muted>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div id="gridRepetition" className="w-1/2 flex flex-col p-2 bg-blue-gray-50 rounded-md mt-2">
                        <ul className="w-full flex flex-row justify-around">
                            <li>
                                <FontAwesomeIcon icon={faRepeat} />
                            </li>
                            {mockExercises[exerciseIndex].seriesData.repetitions.map((serie, index) => (
                                <li key={index}>
                                    <Typography variant="small">{serie}</Typography>
                                </li>
                            ))}
                        </ul>
                        <ul className="w-full flex flex-row justify-around">
                            <li>
                                <FontAwesomeIcon icon={faDumbbell} />
                            </li>
                            {mockExercises[exerciseIndex].seriesData.weight.map((weight, index) => (
                                <li key={index}>
                                    <Typography variant="small">{weight}</Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="gradient" onClick={handleOpen}>
                        <span>OK</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default Treino