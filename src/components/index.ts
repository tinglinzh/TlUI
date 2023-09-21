import { App } from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import notification from "./notification";
import list from "./list";
import menu from "./menu";
import progress from "./progress";
import chooseTime from "./chooseTime";
import chooseDate from "./chooseDate";
import chooseCity from "./chooseCity";
import form from "./form";
import table from "./table";
import calendar from "./calendar";

const component = [
    chooseArea,
    menu,
    chooseIcon,
    notification,
    chooseTime,
    list,
    progress,
    chooseDate,
    chooseCity,
    form,
    table,
    calendar
];
export default {
    install(app: App) {
        component.map((item) => {
            app.use(item);
        });
    },
};
