import {
  Button,
  Form,
  Input,
  Label,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

export const ContactForm = () => {
  return (
    <Form className="flex flex-col gap-6">
      <Surface className="flex w-full flex-col gap-4 rounded-3xl p-6 bg-[#7A87FF]">
        <TextField>
          <Label htmlFor="input-name" className="text-lg font-bold text-white">
            Имя
          </Label>
          <Input id="input-name" placeholder="Введите свое имя" type="text" />
        </TextField>
        <TextField>
          <Label htmlFor="input-phone" className="text-lg font-bold text-white">
            Номер телефона
          </Label>
          <Input
            id="input-phone"
            placeholder="Введите свой номер телефона"
            type="text"
          />
        </TextField>
        <TextField>
          <Label
            htmlFor="input-comment"
            className="text-lg font-bold text-white"
          >
            Комментарий
          </Label>
          <TextArea
            id="input-comment"
            placeholder="Скажите, что вас беспокоит"
          />
        </TextField>
        <Button className="w-full" size="lg" variant="tertiary">
          Отправить
        </Button>
      </Surface>
    </Form>
  );
};
