
export async function onRequest(context) {
	// 处理请求...

	// 返回响应
	return new Response('这是functions文件夹里的string.js', {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
}