import Button from "@/shared/components/elements/Button";

export default function SuccessSendMessage({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col max-w-xs text-center">
      <h1 className="text-2xl text-white ">Thank you! 🤘</h1>
      <p className="text-secondary6 text-sm">
        Your message has been accepted. You will recieve answer really soon!
      </p>
      <Button className="mt-5 w-fit mx-auto" onClick={onClick}>
        send-new-message
      </Button>
    </div>
  );
}
