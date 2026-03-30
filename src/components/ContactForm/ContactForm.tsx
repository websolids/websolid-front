import {
  Button,
  Form,
  Input,
  Label,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { DateTimePicker } from "../DateTimePicker";

export const ContactForm = () => {
  return (
    <Form className="flex flex-col gap-6">
      <Surface className="flex w-full flex-col gap-4 bg-transparent">
        <h4 className="text-2xl text-accent font-bold">Связаться с нами</h4>
        <TextField>
          <Label htmlFor="input-name" className="text-lg font-bold text-black">
            Имя
          </Label>
          <Input id="input-name" placeholder="Ваше имя" type="text" />
        </TextField>
        <TextField>
          <Label htmlFor="input-phone" className="text-lg font-bold text-black">
            Email
          </Label>
          <Input id="input-phone" placeholder="example@mail.ru" type="text" />
        </TextField>
        <TextField>
          <Label htmlFor="input-phone" className="text-lg font-bold text-black">
            Номер телефона
          </Label>
          <Input
            id="input-phone"
            placeholder="Ваш номер телефона"
            type="text"
          />
        </TextField>
        <DateTimePicker />
        <TextField>
          <Label
            htmlFor="input-comment"
            className="text-lg font-bold text-black"
          >
            Комментарий
          </Label>
          <TextArea
            className="resize-none"
            id="input-comment"
            placeholder="Скажите, что вас беспокоит"
            rows={5}
          />
        </TextField>

        <Button className="w-full" size="lg" variant="primary">
          Отправить
        </Button>
      </Surface>
    </Form>
  );
};
