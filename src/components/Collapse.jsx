import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
} from "@material-tailwind/react";

import Piechart from './Piechart'
import { useState } from "react";

export default function CollapseDefault() {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);

    return (
        <div className="mt-[40px] ">
            <div>
                <Button onClick={toggleOpen}>See More</Button>
            </div>
            <Collapse open={open}>
                <Card className="my-4 mx-auto w-8/12 flex flex-col items-center">
                    <CardBody>
                        <Piechart />
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}