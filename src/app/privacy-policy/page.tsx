import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "產業與企業人才資料庫.隱私權政策",
};

const PagePrivacyPolicy = () => {
  return (
    <div className="mx-5 my-25">
      <h1>[產業與企業人才資料庫]</h1>
      <h1>隱私權政策 (備份)</h1>
      <div>
        目前
        <a
          className="text-blue-600 visited:text-purple-600 hover:underline"
          href="https://www.twtalent.net/"
        >
          網站
        </a>
        正在積極搶修中
      </div>
      <div>
        歡迎您光臨「產業與企業人才資料庫」。為確保您在本網站上的使用體驗安心，並保護您的隱私權益，特此說明本網站的隱私權保護政策，請您詳閱以下內容。
      </div>
      <br />
      <div>
        <div className="text-2xl pt-2">隱私權政策適用範圍</div>
        <ul>
          <li>
            本隱私權政策適用於「產業與企業人才資料庫」網站內所收集和處理的個人資料，不適用於外部連結之第三方網站，也不包含非本網站管理或委託的人員所蒐集的資料。
          </li>
        </ul>
        <div className="text-2xl pt-2">個人資料的蒐集、處理及利用方式</div>
        <ul>
          <li>
            在您註冊、登入、或參與網站功能（如提出資料修正建議）時，將根據服務需求收集必要的個人資料。收集到的個人資料僅限於達成本網站功能的使用，不作為其他用途。
          </li>
          <li>
            本網站將依據法令、或經您授權的目的，對個人資料進行處理與使用。除法律另有規定或政府機構要求，本網站不會在未經同意下，將您的個人資料提供予第三方或用於其他用途。
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PagePrivacyPolicy;
