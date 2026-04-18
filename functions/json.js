
export async function onRequest(context) {
	// 处理请求...
	const data = {
		message: '这是functions文件夹里的json.js',
		data: [1, 2, 3],
	};

	// 返回响应
	return new Response(JSON.stringify(data), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}