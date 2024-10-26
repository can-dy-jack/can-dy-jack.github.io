import BaseLayout from "../../components/BaseLayout"
import {WeiboCard, ZhihuCard} from "@site/src/pages/news/NewsCard";


const cards = [];

export default function NewsPage() {
    return (
        <BaseLayout>
            <div style={{
                display: "flex",
                padding: "50px 20px",
                gap: "20px",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
            }}>
              <WeiboCard />
              <ZhihuCard />
            </div>
        </BaseLayout>
    )
}
