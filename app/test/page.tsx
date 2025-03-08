import {
    Input,
    FileInput,
    ButtonInput,
    FormInput, LabelInput,
} from "@/components/ui/input";

export default function TestInput() {
    return (
        <div className="flex flex-col items-center gap-4 p-8">
            <Input
                placeholder={"email"}
            />
            <Input
                variant={"disabled"}
            />
            <FileInput
                variant={"file"}
                label="Upload File"
            />
            <ButtonInput
                variant={"disabled"}
            />
            <FormInput
                label={"Username"}
                placeholder={"codelab"}
            />
            <LabelInput
                label={"Username"}
                />
        </div>
    )
}