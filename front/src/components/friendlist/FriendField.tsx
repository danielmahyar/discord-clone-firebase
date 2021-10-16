import template from '../../assets/template.jpg'

const FriendField = () => {
	return (
		<div className="px-1.5 p-1.5 flex items-center cursor-pointer rounded hover:bg-gray-700">
			<img src={template} width="15%" className="mr-3 rounded-full" alt="" />
			<h2 className="text-gray-500 font-bold text-sm">Name of Person</h2>
		</div>
	)
}

export default FriendField
