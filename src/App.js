import { Message } from "./components/Message";

export const App = () => {
	const text = "Привет! Это мой блог. Здесь я буду публиковать интересные факты о природе!";

	return (
	<>
	<Message text = {text}/>
	</>
	);
}