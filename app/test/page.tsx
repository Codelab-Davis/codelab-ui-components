import RadioButton from "@/components/ui/RadioButton";

export default function TestPage() {
  return (
    <main className="p-8">
      {/* Radio Button */}
      <RadioButton
        title="Radio Buttons"
        options={[
          { label: "Comfortable", value: "comfortable" },
          { label: "Default", value: "default" },
        ]}
        //* Radio Button container*//
        customWidth="280px" 
        customHeight="71px" 
      />
    </main>
  );
}

