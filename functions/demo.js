
export async function onRequest(context) {
	// 从环境变量获取Cloudflare API凭证
    const { CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID } = context.env;

    

    // 验证必要的环境变量
    if ( !CLOUDFLARE_API_TOKEN || !CLOUDFLARE_ACCOUNT_ID ) {
    	return new Response(
    		JSON.stringify({
    			error: 'Missing API credentials'
    		})
    		,{
    			status: 500,
    			headers: {
    				'Content-Type': 'application/json'
    			}
    		}
    	);
    } else {
        return new Response('CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN is OK', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
            },
        });
    }

}