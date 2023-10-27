import "../styles/_Footer.scss";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="footer">
          <section>
            <p>
              푸릇파릇에서 판매되는 상품 중에는 푸릇파릇에 입점한 개별 판매자가
              판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
            </p>
            <p>
              마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
              통신판매의 당사자가 아닙니다.{" "}
            </p>
            <p>
              푸릇파릇은 해당 상품의 주문, 품질,교환/환불 등 의무와 책임을
              부담하지 않습니다.
            </p>
          </section>
          <p>© Freshgreenish CORP. ALL RIGHTS RESERVED</p>
        </section>
      </footer>
    </>
  );
}
