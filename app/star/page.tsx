import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function StarPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-title text-3xl tracking-wide">
          赞助与交流
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-[280px_1fr]">
        <img
          className="w-full rounded-lg border"
          src="/qrcode/wxshop.png"
          alt="微信二维码"
        />
        <div className="space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            扫码关注交流学习，赞助费仅用于站点维护，音乐版权归李志先生所有。
          </p>
          <p>
            送你一本李先生的《吉他谱》，如果你也玩吉他，希望这些谱子能帮你多弹几首。
          </p>
          <p>
            <Link
              className="font-medium text-foreground underline underline-offset-4"
              href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMTg2NTE2Mw==&action=getalbum&album_id=4027337809487642629#wechat_redirect"
              target="_blank"
            >
              查看吉他谱合集
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
