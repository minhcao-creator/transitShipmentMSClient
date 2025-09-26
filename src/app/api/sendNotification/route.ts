export async function POST(req: any) {
  try {
    const { expoPushToken, title, message } = await req.json();

    if (!expoPushToken) {
      return Response.json({ error: "Thiếu Expo Push Token" }, { status: 400 });
    }

    //console.log('expoPushToken', expoPushToken)

    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-Encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: expoPushToken,
        title: title || "Thông báo mới",
        body: message || "Bạn có thông báo mới!",
        sound: "default",
        priority: "high",
      }),
    });

    //console.log('response', response)

    const result = await response.json();
    //console.log('result', result);

    return Response.json(result);
  } catch (error) {
    console.error("Lỗi gửi thông báo:", error);
    return Response.json({ error: "Lỗi server" }, { status: 500 });
  }
}
