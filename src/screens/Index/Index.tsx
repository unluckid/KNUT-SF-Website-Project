import { useState } from "react";

export const Index = (): JSX.Element => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

 // Data for navigation menu
  const menuItems = [
    { id: 1, label: "Menu1", position: { left: 160 } },
    { id: 2, label: "Menu1", position: { left: 415 } },
    { id: 3, label: "Menu1", position: { left: 671 } },
  ]

  // Data for the main content cards
  const mainCards = [
    {
      id: 1,
      title: "타이틀",
      content: "내용",
      image: "https://c.animaapp.com/WSePZwLR/img/unsplash--ovaymgbmbs@2x.png",
      size: "small",
    },
    {
      id: 2,
      title: "단체사진",
      content: "내용",
      image: "https://c.animaapp.com/WSePZwLR/img/unsplash-2zohxrazffq@2x.png",
      size: "small",
    },
    {
      id: 3,
      title: "카드 뉴스",
      content: "과학 박물관에 대한 내용들",
      image: "https://c.animaapp.com/WSePZwLR/img/image.png",
      size: "large",
    },
  ];
    // Data for the card gallery section
    const galleryCards = [
        {
            id: 1,
            image: "https://c.animaapp.com/WSePZwLR/img/unsplash-dghy9kgdtj0@2x.png",
            description: "설명 넣는 칸",
            position: { top: 43, left: 0 },
        },
        {
            id: 2,
            image:
                "https://c.animaapp.com/WSePZwLR/img/unsplash-dghy9kgdtj0-1@2x.png",
            description: "설명 넣는 칸",
            position: { top: 43, left: 51 },
        },
        {
            id: 3,
            image:
                "https://c.animaapp.com/WSePZwLR/img/unsplash-dghy9kgdtj0-4@2x.png",
            description: "설명 넣는 칸",
            position: { top: 0, left: 101 },
        },
        {
            id: 4,
            image:
                "https://c.animaapp.com/WSePZwLR/img/unsplash-dghy9kgdtj0-4@2x.png",
            description: "설명 넣는 칸",
            position: { top: 43, left: 159 },
        },
        {
            id: 5,
            image:
                "https://c.animaapp.com/WSePZwLR/img/unsplash-dghy9kgdtj0-4@2x.png",
            description: "설명 넣는 칸",
            position: { top: 43, left: 216 },
        },
    ];
  ;

  // Data for pagination dots
  const paginationDots = [
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: true },
    { id: 4, active: false },
    { id: 5, active: false },
  ];

  return (
    <div
      className="bg-[#e6940fc2] grid justify-items-center [align-items:start] w-screen"
      data-model-id="18:29"
    >
      <div className="bg-[#e6940fc2] w-[1920px] h-[5142px] relative">
        {/* Instagram Section */}
        <section className="absolute w-[1629px] h-[1462px] top-[2762px] left-[195px] bg-[#ffffff] rounded-[83px] overflow-hidden shadow-[0px_4px_4px_6px_#00000042]">
          <div className="relative w-[1514px] h-[1188px] top-[214px] left-[58px]">
            <div className="absolute w-[1514px] h-[1063px] top-[125px] left-0 bg-[#ffffff]">
              <img
                className="absolute w-[812px] h-[1014px] top-[49px] left-11 aspect-[0.8] object-cover"
                alt="Instagram post image"
                src="https://c.animaapp.com/WSePZwLR/img/insta-img.png"
              />

              <div className="h-[729px] top-[151px] absolute w-[591px] left-[856px] border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-l [border-left-style:solid] border-[#000000]">
                <img
                  className="absolute w-[574px] h-[728px] top-px left-[17px] aspect-[0.79] object-cover"
                  alt="Instagram content image"
                  src="https://c.animaapp.com/WSePZwLR/img/image-4.png"
                />
              </div>

              <div className="h-[183px] top-[880px] absolute w-[591px] left-[856px] border-r [border-right-style:solid] border-b [border-bottom-style:solid] border-l [border-left-style:solid] border-[#000000]">
                <img
                  className="absolute w-[591px] h-[75px] top-1 left-0 aspect-[7.88] object-cover"
                  alt="Instagram interaction bar"
                  src="https://c.animaapp.com/WSePZwLR/img/image-2.png"
                />
              </div>

              <header className="absolute w-[591px] h-[102px] top-[49px] left-[856px] border border-solid border-[#000000]">
                <a
                  className="w-[66px] top-9 left-[254px] font-bold text-[#4143e3] text-xl underline absolute [font-family:'Roboto',Helvetica] tracking-[0] leading-[normal] hover:text-[#3132d1] focus:outline-none focus:ring-2 focus:ring-[#4143e3] focus:ring-offset-2"
                  href="https://www.instagram.com/p/DHGZo46pPeb/"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Follow KNUT SFSU on Instagram"
                >
                  팔로우
                </a>

                <div className="absolute w-[152px] h-8 top-[34px] left-[102px]">
                  <h2 className="absolute w-[152px] top-0 left-0 [font-family:'Roboto',Helvetica] font-medium text-[#000000] text-xl tracking-[0] leading-[normal]">
                    _KNUT_SFSU_
                  </h2>

                  <img
                    className="w-3.5 h-[15px] top-0.5 left-[129px] aspect-[0.92] absolute object-cover"
                    alt="Verification badge"
                    src="https://c.animaapp.com/WSePZwLR/img/-@2x.png"
                  />
                </div>

                <button
                  className="w-[51px] h-[37px] top-[33px] left-[498px] aspect-[1.39] absolute hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  aria-label="More options"
                >
                  <img
                    className="w-full h-full object-cover"
                    alt="More options"
                    src="https://c.animaapp.com/WSePZwLR/img/---@2x.png"
                  />
                </button>

                 <a
                                  className="absolute w-[54px] h-[54px] top-6 left-[39px] hover:opacity-80 transition-opacity rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-20"
                 aria-label="KNUT 홈페이지로 이동"
                 href="https://www.ut.ac.kr"
                              >

                      <img
                       className="w-full h-full object-cover"
                       alt="KNUT logo"
                       src="https://c.animaapp.com/WSePZwLR/img/knut-logo.svg" />
                      </a>
              </header>
            </div>

            <img
              className="absolute w-[407px] h-[138px] top-0 left-[175px] aspect-[2.95] object-cover"
              alt="Instagram logo"
              src="https://c.animaapp.com/WSePZwLR/img/instalogo@2x.png"
            />

            <nav className="flex w-[1512px] h-[73px] items-center justify-around gap-[1042px] top-8 absolute left-0">
              <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                <button className="relative w-10 h-10 bg-gray rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors">
                  <div className="flex w-6 h-6 items-center justify-center relative top-2 left-2">
                    <span
                      className="text-black-50 relative w-4 [font-family:'Font_Awesome_6_Free-Solid',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]"
                      aria-hidden="true"
                    ></span>
                  </div>
                </button>

                <button className="relative w-10 h-10 bg-gray rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors">
                  <div className="flex w-6 h-6 items-center justify-center relative top-2 left-2">
                    <span
                      className="text-black relative w-4 [font-family:'Font_Awesome_6_Free-Solid',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]"
                      aria-hidden="true"
                    ></span>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </section>

        {/* Card Gallery Section */}
        <section className="absolute w-[1454px] h-[741px] top-[1883px] left-[233px] shadow-[inset_0px_4px_4px_#00000040]">
          <div className="relative h-[741px] shadow-[0px_4px_4px_#00000040]">
            {/* Instruction Card */}
            <div className="w-[493px] h-[559px] top-0 left-[937px] rounded-[14px] overflow-hidden shadow-[0px_4px_4px_#00000040] absolute bg-[#ffffff]">
              <div className="relative rounded-[14px] overflow-hidden w-[443px] h-[364px] top-[30px] left-[25px]">
                <p className="absolute w-[267px] top-9 left-[33px] font-h5 font-[number:var(--h5-font-weight)] text-[#000000] text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
                  마우스 포인터를 좌측에 올리면 좌측과 같이 카드가 위로
                  올라옴(layer도 맨위로)
                  <br />
                  클릭시 카드가 현재 위치로 이동
                  <br />
                  <br />
                  좌측 정렬을 조금더 이쁘게 할 방법이 있다면 수정해주면 좋겠음
                </p>
              </div>
            </div>

            {/* Gallery Cards */}
            <div className="absolute w-[709px] h-[615px] top-[-50px] left-0">
              {galleryCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`w-[493px] ${index === 2 ? "h-[569px]" : index === 3 ? "h-[571px]" : "h-[572px]"} rounded-[14px] overflow-hidden shadow-[0px_4px_4px_#00000040] absolute bg-[#ffffff] transition-all duration-300 cursor-pointer ${
                    hoveredCard === card.id
                      ? "transform -translate-y-4 z-10"
                      : ""
                  }`}
                  style={{
                    top: `${card.position.top}px`,
                    left: `${card.position.left}px`,
                  }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setHoveredCard(null)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setHoveredCard(null);
                    }
                  }}
                  aria-label={`Gallery card ${card.id}`}
                >
                  <div
                    className="absolute rounded-[14px] bg-cover bg-[50%_50%] w-[443px] h-[364px] top-[30px] left-[25px]"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />

                  <p className="w-[404px] top-[428px] left-10 font-[number:var(--h5-font-weight)] text-[#000000] text-[length:var(--h5-font-size)] absolute font-h5 tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)] [font-style:var(--h5-font-style)]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <nav className="flex w-[1454px] h-[73px] items-center justify-around gap-[1042px] absolute top-[633px] left-0">
              <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                <button className="relative w-10 h-10 bg-gray rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors">
                  <div className="flex w-6 h-6 items-center justify-center relative top-2 left-2">
                    <span
                      className="text-black-50 relative w-4 [font-family:'Font_Awesome_6_Free-Solid',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]"
                      aria-hidden="true"
                    ></span>
                  </div>
                </button>

                <button className="relative w-10 h-10 bg-gray rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors">
                  <div className="flex w-6 h-6 items-center justify-center relative top-2 left-2">
                    <span
                      className="text-black relative w-4 [font-family:'Font_Awesome_6_Free-Solid',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]"
                      aria-hidden="true"
                    ></span>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="absolute w-[1920px] h-[945px] top-0 left-0">
          <div className="flex flex-col w-[1920px] h-[945px] items-start gap-2.5 absolute top-0 left-0">
            <img
              className="relative w-[1920px] h-[945px]"
              alt="Hero background image"
              src="https://c.animaapp.com/WSePZwLR/img/image-background.png"
            />
          </div>
            <header className="w-[1920px] h-[110px] top-0 bg-[#2c2c2c57] absolute left-0">
                      <a href= "https://www.ut.ac.kr">
            <img
              className="absolute w-[523px] h-[110px] top-0 left-0"
              alt="KNUT logo"
              src="https://c.animaapp.com/WSePZwLR/img/knut-logo-1.png"
            />
                  </a>

            <nav className="absolute w-[1397px] h-[110px] top-0 left-[523px]">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="absolute w-[95px] h-[42px] top-[33px] [font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-xl text-center tracking-[0] leading-[normal] hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent transition-colors"
                  style={{ left: `${item.position.left}px` }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </header>
        </section>

        {/* Main Content Cards */}
        <section className="inline-flex items-center gap-14 px-[92px] py-[77px] absolute top-[1125px] left-20 bg-[#ffffff] rounded-2xl overflow-hidden shadow-[-9px_-8px_4px_#0000006e]">
          {mainCards.map((card) => (
            <article
              key={card.id}
              className={`relative ${card.size === "large" ? "w-[744px]" : "w-[360px]"} h-[452px] rounded-xl overflow-hidden bg-cover bg-[50%_50%]`}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div
                className={`relative ${card.size === "large" ? "w-[724px]" : "w-[339px]"} h-[117px] top-[325px] left-2.5 bg-white-75 rounded-xl backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]`}
              >
                <div
                  className={`flex flex-col ${card.size === "large" ? "w-[724px]" : "w-[339px]"} items-start p-4 absolute top-0 left-0`}
                >
                  <h3
                    className={`relative ${card.size === "large" ? "w-[692px]" : "w-[307px]"} h-[29px] mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-dark text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical] [font-style:var(--h3-font-style)]`}
                  >
                    {card.title}
                  </h3>
                </div>

                <div
                  className={`flex flex-col ${card.size === "large" ? "w-[543px]" : "w-[339px]"} items-start gap-2 pt-0 pb-4 px-4 absolute top-[61px] left-0`}
                >
                  <p
                    className={`relative ${card.size === "large" ? "w-[527px] mr-[-16.00px]" : "self-stretch"} h-10 mt-[-1.00px] font-paragraph font-[number:var(--paragraph-font-weight)] text-dark-75 text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--paragraph-font-style)]`}
                  >
                    {card.content}
                  </p>
                </div>
              </div>

              {card.size === "large" && (
                <>
                  {/* Pagination Dots */}
                  <div className="inline-flex items-center justify-end gap-[5px] absolute top-24 left-[623px]">
                    {paginationDots.map((dot) => (
                      <button
                        key={dot.id}
                        className={`relative ${dot.active ? "w-[27px] bg-white" : "w-2.5 bg-white-50"} h-2.5 ${dot.active ? "rounded-[50px]" : "rounded-[5px]"} hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all`}
                        aria-label={`Go to slide ${dot.id}`}
                        aria-current={dot.active ? "true" : "false"}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="inline-flex items-center gap-[644px] absolute top-[206px] left-2.5">
                    <button className="relative w-10 h-10 bg-gray rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors">
                      <div className="flex w-6 h-6 items-center justify-center relative top-2 left-2">
                        <span
                          className="text-black-50 relative w-4 [font-family:'Font_Awesome_6_Free-Solid',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </button>

                    <button className="relative w-10 h-10 bg-gray rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors">
                      <div className="flex w-6 h-6 items-center justify-center relative top-2 left-2">
                        <span
                          className="text-black relative w-4 [font-family:'Font_Awesome_6_Free-Solid',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal]"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </button>
                  </div>
                </>
              )}
            </article>
          ))}
        </section>

        {/* Bottom Image Card */}
        <div className="flex w-[744px] h-[210px] items-start gap-2.5 p-2.5 top-[4593px] left-[588px] rounded-xl shadow-shadow absolute bg-white">
          <div className="relative self-stretch w-[340px] rounded-xl bg-[url(https://c.animaapp.com/WSePZwLR/img/unsplash-tk71sys8uby@2x.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>
    </div>
  );
};