import { FC } from "react"
import { Button, ButtonGroup, Typography } from "@material-tailwind/react"

const Treino: FC = () => {
    return (
        <div className="flex w-max flex-col mx-auto gap-4 mt-3 items-center">
            <ButtonGroup variant="outlined" size="sm">
                <Button>Dom</Button>
                <Button>Seg</Button>
                <Button>Ter</Button>
                <Button>Qua</Button>
                <Button>Qui</Button>
                <Button>Sex</Button>
                <Button>Sab</Button>
            </ButtonGroup>
            <ul className="flex gap-2">
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="w-12 h-12 flex p-2 font-medium text-sm rounded-full border-2 border-blue-gray-500 items-center justify-center even:bg-blue-gray-500 even:text-blue-gray-50"
                >
                    Dom
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="w-12 h-12 flex p-2 font-medium text-sm rounded-full border-2 border-blue-gray-500 items-center justify-center even:bg-blue-gray-500 even:text-blue-gray-50"
                >
                    Seg
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="w-12 h-12 flex p-2 font-medium text-sm rounded-full border-2 border-blue-gray-500 items-center justify-center even:bg-blue-gray-500 even:text-blue-gray-50"
                >
                    Ter
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="w-12 h-12 flex p-2 font-medium text-sm rounded-full border-2 border-blue-gray-500 items-center justify-center even:bg-blue-gray-500 even:text-blue-gray-50"
                >
                    Qua
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="w-12 h-12 flex p-2 font-medium text-sm rounded-full border-2 border-blue-gray-500 items-center justify-center even:bg-blue-gray-500 even:text-blue-gray-50"
                >
                    Qui
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="w-12 h-12 flex p-2 font-medium text-sm rounded-full border-2 border-orange-900 items-center justify-center even:bg-orange-900 even:text-blue-gray-50"
                >
                    Sex
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="w-12 h-12 flex p-2 font-medium text-sm rounded-full border-2 border-blue-gray-500 items-center justify-center even:bg-blue-gray-500 even:text-blue-gray-50"
                >
                    Sab
                </Typography>
            </ul>
        </div>
    )
}

export default Treino