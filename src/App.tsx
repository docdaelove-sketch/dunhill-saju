import React, { useState } from 'react';
import {
  Sparkles,
  Compass,
  BookOpen,
  AlertTriangle,
  TrendingUp,
  RotateCcw,
  Calendar,
  Award,
  UserCheck,
  ShieldAlert,
  Flame,
  Star,
  ChevronRight
} from 'lucide-react';
import SushiConveyorMenu, { type ConveyorDish } from '@/components/ui/sushi-conveyor-menu';
import {
  analyzeSajuAndMbti,
  ELEMENT_META,
  MBTI_PROFILES,
  type FullSajuAnalysis
} from '@/lib/saju-engine';

export default function App() {
  // 입력 폼 상태
  const [birthYear, setBirthYear] = useState<string>('1996');
  const [birthMonth, setBirthMonth] = useState<string>('5');
  const [birthDay, setBirthDay] = useState<string>('15');
  const [calendarType, setCalendarType] = useState<'solar' | 'lunar'>('solar');
  const [gender, setGender] = useState<'male' | 'female' | ''>('female');
  const [userName, setUserName] = useState<string>('김던힐');
  const [ampm, setAmpm] = useState<'AM' | 'PM' | ''>('AM');
  const [birthHour, setBirthHour] = useState<string>('');
  const [birthMinute, setBirthMinute] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  // 결과 및 탭 상태
  const [analysis, setAnalysis] = useState<FullSajuAnalysis | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [selectedDishId, setSelectedDishId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const y = parseInt(birthYear, 10);
    const m = parseInt(birthMonth, 10);
    const d = parseInt(birthDay, 10);

    if (!y || !m || !d) {
      setErrorMsg('1. 생년월일(년, 월, 일) 빈칸을 숫자로 모두 채워주세요.');
      return;
    }
    if (m < 1 || m > 12 || d < 1 || d > 31 || y < 1900 || y > 2030) {
      setErrorMsg('생년월일 숫자를 올바르게 입력해주세요 (1900~2030년, 1~12월, 1~31일).');
      return;
    }
    if (!gender) {
      setErrorMsg('2. 성별(남자/여자)을 드롭박스에서 선택해주세요.');
      return;
    }
    if (!userName.trim()) {
      setErrorMsg('3. 이름을 입력해주세요.');
      return;
    }
    if (!ampm) {
      setErrorMsg('4. 태어난 시간의 오전/오후를 드롭박스에서 필수로 선택해주세요.');
      return;
    }

    const isTimeDefaulted = birthHour.trim() === '';
    const hour12 = isTimeDefaulted ? 12 : parseInt(birthHour, 10);
    const minute = birthMinute.trim() === '' ? 0 : parseInt(birthMinute, 10);

    if (isNaN(hour12) || hour12 < 0 || hour12 > 12 || isNaN(minute) || minute < 0 || minute > 59) {
      setErrorMsg('시간은 0~12시, 분은 0~59분 사이로 입력해주세요.');
      return;
    }

    let hour24 = hour12;
    if (ampm === 'AM') {
      hour24 = hour12 === 12 ? 0 : hour12;
    } else {
      hour24 = hour12 === 12 ? 12 : hour12 + 12;
    }

    const result = analyzeSajuAndMbti({
      name: userName.trim(),
      year: y,
      month: m,
      day: d,
      calendarType,
      gender,
      ampm,
      hour12,
      minute,
      hour24,
      isTimeDefaulted
    });

    setAnalysis(result);
    setSelectedYear(2026);
    setSelectedDishId(result.lifeDomains[0].id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SushiConveyorMenu 에 전달할 8개의 회전 운세 접시 데이터
  const conveyorItems: ConveyorDish[] = React.useMemo(() => {
    if (!analysis) return [];
    const domainDishes: ConveyorDish[] = analysis.lifeDomains.map((dom) => ({
      id: dom.id,
      name: dom.title,
      price: dom.score,
      tier: dom.tier,
      description: `${dom.harmonyAnalysis} [주의] ${dom.cautionDetail} [대박 포인트] ${dom.boomDetail}`,
      details: dom.tags,
      image: dom.image
    }));

    const mbtiProfile = MBTI_PROFILES[analysis.mbti];
    const extraDishes: ConveyorDish[] = [
      {
        id: 'mbti-destiny',
        name: `사주 MBTI · ${analysis.mbti}`,
        price: '천생기질',
        tier: 5,
        description: `${mbtiProfile.nickname}! ${mbtiProfile.summary}`,
        details: [analysis.mbti, analysis.pillars.day.stem.kor, '선천성향', '장단점분석'],
        image: mbtiProfile.image
      },
      {
        id: 'three-year-luck',
        name: '2026~2028 3년 대운',
        price: '병오·정미·무신',
        tier: 4,
        description: '올해(2026 병오년)부터 2027 정미년, 2028 무신년까지 이어지는 3년 황금기의 흐름과 개운 비책입니다.',
        details: ['2026 병오년', '2027 정미년', '2028 무신년', '세운분석'],
        image: ELEMENT_META[analysis.strongestElement].image
      }
    ];

    return [...domainDishes, ...extraDishes];
  }, [analysis]);

  const conveyorLegend = {
    1: '체질·건강운',
    2: '애정·배우자운',
    3: '표현·실행운',
    4: '직업·3년대운',
    5: '재물·귀인·MBTI'
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1224] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* 상단 전통 버건디 헤더 (첨부 이미지 '연희사주' 스타일 완벽 재현) */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-[#3a0d16] via-[#4a121d] to-[#3a0d16] border-b border-amber-500/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div
            onClick={() => setAnalysis(null)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded border-2 border-amber-400/80 bg-[#2a080e] flex flex-col items-center justify-center text-[10px] leading-tight font-serif-kr text-amber-300 font-bold shadow-inner group-hover:scale-105 transition-transform">
              <span>사주</span>
              <span>운세</span>
            </div>
            <span className="font-serif-kr text-xl sm:text-2xl font-bold tracking-wider text-amber-100">
              던힐 사주 <span className="text-xs sm:text-sm font-normal text-amber-300/90 hidden sm:inline">× 현대 MBTI 명리연구소</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-amber-100/90">
            <button onClick={() => setAnalysis(null)} className="hover:text-amber-300 transition-colors">사주팔자 입력</button>
            <a href="#conveyor-section" className="hover:text-amber-300 transition-colors">회전 운세판</a>
            <a href="#harmony-section" className="hover:text-amber-300 transition-colors">오행·십성 6대영역</a>
            <a href="#three-year-section" className="hover:text-amber-300 transition-colors">2026~2028 3년운</a>
            <a href="#mbti-section" className="hover:text-amber-300 transition-colors">사주 MBTI</a>
          </nav>

          {analysis && (
            <button
              onClick={() => setAnalysis(null)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-200 text-xs sm:text-sm font-medium hover:bg-amber-500/30 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              다시 입력하기
            </button>
          )}
        </div>
      </header>

      {/* 1. 첫 랜딩 페이지 (첨부 이미지와 동일한 구도: 밤하늘·전통 문양·만세력·사주통·나침반 + 우측 크림색 사주 입력 카드) */}
      {!analysis && (
        <main className="flex-1 flex flex-col justify-between">
          <section className="relative overflow-hidden py-10 sm:py-16 lg:py-20 px-4 sm:px-8 bg-[radial-gradient(ellipse_at_top_left,_#1b294b_0%,_#0d152b_55%,_#080c1a_100%)]">
            {/* 배경 별빛 & 전통 구름/태극 장식 SVG */}
            <div className="pointer-events-none absolute inset-0 opacity-35">
              <div className="absolute top-6 left-6 w-36 h-36 rounded-full border-4 border-amber-500/30 flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-blue-500/10">
                <div className="w-20 h-20 rounded-full border-2 border-amber-400/40 bg-gradient-to-tr from-rose-700/40 via-amber-500/30 to-blue-800/40 animate-pulse" />
              </div>
              <svg className="absolute left-0 top-1/4 w-96 h-48 text-amber-400/15" viewBox="0 0 400 200" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 120 C50 80, 110 80, 140 120 C170 90, 230 90, 260 130 C290 110, 340 110, 370 140" />
                <path d="M40 150 C80 115, 140 115, 180 150 C220 125, 270 125, 310 155" />
              </svg>
              <div className="absolute right-10 top-10 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* 좌측 영역: 타이틀 문구 + 전통 만세력 책, 사주 원통 4개(연·월·일·시), 금빛 나침반 일러스트 */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                <p className="text-amber-200/90 text-base sm:text-lg font-medium mb-2 tracking-wide">
                  나의 타고난 운명과 미래, 사주팔자로 풀어보세요
                </p>
                <h1 className="font-serif-kr text-3xl sm:text-4xl xl:text-5xl font-bold leading-snug mb-4 text-white">
                  인생의 길잡이가 되어줄
                  <br />
                  <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(245,158,11,0.35)]">
                    당신의 사주팔자
                  </span>
                </h1>
                <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl">
                  태어난 년, 월, 일, 시만으로 당신의 오행·십성 조화와 선천적 MBTI, 그리고 <strong className="text-amber-300">2026·2027·2028년 3년 대운</strong>을 정밀 분석해 드립니다.
                </p>

                {/* 전통 오브제 그래픽 (만세력 고서 + 4주 원통 + 금빛 풍수 나침반) */}
                <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-12 gap-4 items-end pt-2">
                  {/* 만세력 고서 */}
                  <div className="sm:col-span-3 flex justify-center">
                    <div className="w-28 h-40 rounded-r-md bg-gradient-to-b from-[#1e2d4f] to-[#121c36] border-l-8 border-amber-700/80 border border-amber-400/40 shadow-2xl p-3 flex flex-col items-center justify-between relative">
                      <div className="w-8 bg-[#f7f2e7] text-slate-900 font-serif-kr font-bold text-xs py-2 px-1 rounded-xs shadow border border-amber-700 leading-tight text-center">
                        만세력<br />萬歲曆
                      </div>
                      <span className="text-[11px] text-amber-200/70 font-serif-kr">천간·지지·십성</span>
                    </div>
                  </div>

                  {/* 사주 네 기둥(연주·월주·일주·시주) 전통 금장 원통 */}
                  <div className="sm:col-span-6 flex items-end justify-center gap-2.5 sm:gap-3">
                    {[
                      { title: '연주', color: 'from-amber-200 via-amber-400 to-amber-600', text: 'text-slate-900', h: 'h-44' },
                      { title: '월주', color: 'from-[#8c1d24] via-[#6e1319] to-[#4a0b0f]', text: 'text-amber-200', h: 'h-48' },
                      { title: '일주', color: 'from-slate-800 via-slate-900 to-black', text: 'text-amber-300', h: 'h-44' },
                      { title: '시주', color: 'from-[#1e3a6d] via-[#15294f] to-[#0d1b36]', text: 'text-amber-200', h: 'h-48' }
                    ].map((cyl, idx) => (
                      <div
                        key={idx}
                        className={`w-14 sm:w-16 ${cyl.h} rounded-t-xl rounded-b-lg bg-gradient-to-b ${cyl.color} border-2 border-amber-400/70 shadow-[0_12px_25px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden`}
                      >
                        <div className="h-6 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 border-b border-amber-800 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-slate-950">{cyl.title}</span>
                        </div>
                        <div className={`font-serif-kr text-xs font-bold text-center py-2 ${cyl.text}`}>
                          四柱<br />八字
                        </div>
                        <div className="h-8 bg-amber-950/60 border-t border-amber-400/50 flex items-center justify-center text-[10px] text-amber-300">
                          ✦
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 금빛 나침반(윤도) */}
                  <div className="sm:col-span-3 flex justify-center">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 p-1.5 shadow-[0_10px_30px_rgba(245,158,11,0.35)] border-2 border-amber-100/70">
                      <div className="w-full h-full rounded-full border-2 border-amber-900/60 bg-[#f6e7c1] flex flex-col items-center justify-center relative text-amber-950">
                        <span className="absolute top-1 text-[9px] font-bold">子(북)</span>
                        <span className="absolute bottom-1 text-[9px] font-bold">午(남)</span>
                        <span className="absolute left-1.5 text-[9px] font-bold">卯</span>
                        <span className="absolute right-1.5 text-[9px] font-bold">酉</span>
                        <Compass className="w-10 h-10 text-red-700 animate-spin" style={{ animationDuration: '18s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 우측 영역: 첨부 이미지 스타일의 밝은 크림·골드 프레임 입력 카드 (4가지 필수 규칙 + 이름 반영) */}
              <div className="lg:col-span-5">
                <div className="bg-[#fcf9f2] text-slate-800 rounded-2xl p-2 shadow-[0_25px_60px_rgba(0,0,0,0.65)] border-2 border-[#d4b886]">
                  <div className="border border-[#e2ceb1] rounded-xl p-5 sm:p-7">
                    <div className="text-center mb-6">
                      <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                        사주 입력하기
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600">
                        당신의 사주팔자와 선천적 MBTI·3년 대운을 분석해 드립니다
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* 1 & 2. 생년월일 빈칸 직접 입력 + 우측 양력/음력 마우스 버튼식 전환 */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                          1. 생년월일 <span className="text-red-600 text-xs font-semibold">*필수 (빈칸 입력 & 우측 양/음력 버튼)</span>
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <div className="grid grid-cols-3 gap-1.5 flex-1">
                            <div className="flex items-center bg-white border border-[#d5c7b2] rounded-lg px-2.5 focus-within:border-[#8c2323] focus-within:ring-2 focus-within:ring-[#8c2323]/20">
                              <input
                                type="number"
                                value={birthYear}
                                onChange={(e) => setBirthYear(e.target.value)}
                                placeholder="1996"
                                min={1900}
                                max={2030}
                                required
                                className="w-full py-2.5 text-sm font-medium text-slate-900 bg-transparent outline-none"
                              />
                              <span className="text-xs text-slate-500 shrink-0">년</span>
                            </div>
                            <div className="flex items-center bg-white border border-[#d5c7b2] rounded-lg px-2.5 focus-within:border-[#8c2323] focus-within:ring-2 focus-within:ring-[#8c2323]/20">
                              <input
                                type="number"
                                value={birthMonth}
                                onChange={(e) => setBirthMonth(e.target.value)}
                                placeholder="5"
                                min={1}
                                max={12}
                                required
                                className="w-full py-2.5 text-sm font-medium text-slate-900 bg-transparent outline-none"
                              />
                              <span className="text-xs text-slate-500 shrink-0">월</span>
                            </div>
                            <div className="flex items-center bg-white border border-[#d5c7b2] rounded-lg px-2.5 focus-within:border-[#8c2323] focus-within:ring-2 focus-within:ring-[#8c2323]/20">
                              <input
                                type="number"
                                value={birthDay}
                                onChange={(e) => setBirthDay(e.target.value)}
                                placeholder="15"
                                min={1}
                                max={31}
                                required
                                className="w-full py-2.5 text-sm font-medium text-slate-900 bg-transparent outline-none"
                              />
                              <span className="text-xs text-slate-500 shrink-0">일</span>
                            </div>
                          </div>

                          {/* 2. 생년월일 우측 양력/음력 마우스 버튼식 토글 */}
                          <div className="inline-flex rounded-lg border border-[#b99c6b] bg-[#f3ead8] p-0.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => setCalendarType('solar')}
                              className={`px-3 py-2 rounded-md text-xs font-bold transition cursor-pointer ${
                                calendarType === 'solar'
                                  ? 'bg-[#8c6d3f] text-white shadow-xs'
                                  : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              양력
                            </button>
                            <button
                              type="button"
                              onClick={() => setCalendarType('lunar')}
                              className={`px-3 py-2 rounded-md text-xs font-bold transition cursor-pointer ${
                                calendarType === 'lunar'
                                  ? 'bg-[#8c6d3f] text-white shadow-xs'
                                  : 'text-slate-700 hover:text-slate-900'
                              }`}
                            >
                              음력
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 2. 성별 (드롭박스 형식) */}
                      <div>
                        <label htmlFor="gender-select" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                          2. 성별 <span className="text-red-600 text-xs font-semibold">*필수 (드롭박스 선택)</span>
                        </label>
                        <select
                          id="gender-select"
                          value={gender}
                          onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                          required
                          className="w-full bg-white border border-[#d5c7b2] rounded-lg px-3 py-2.5 text-sm font-medium text-slate-900 outline-none focus:border-[#8c2323] focus:ring-2 focus:ring-[#8c2323]/20 cursor-pointer"
                        >
                          <option value="" disabled>성별을 선택하세요 (남자 / 여자)</option>
                          <option value="male">남자 (乾命 · 건명)</option>
                          <option value="female">여자 (坤命 · 곤명)</option>
                        </select>
                      </div>

                      {/* 3. 이름 입력칸 (성별 바로 밑에 추가) */}
                      <div>
                        <label htmlFor="user-name" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                          3. 이름 <span className="text-red-600 text-xs font-semibold">*필수</span>
                        </label>
                        <input
                          id="user-name"
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="이름을 입력하세요 (예: 홍길동)"
                          required
                          className="w-full bg-white border border-[#d5c7b2] rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-900 outline-none focus:border-[#8c2323] focus:ring-2 focus:ring-[#8c2323]/20"
                        />
                      </div>

                      {/* 4. 태어난 정확한 시간 (오전/오후 필수 드롭박스 + 시/분 직접 입력 선택 옵션, 모를 경우 12시 기준) */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                          4. 태어난 시간 <span className="text-red-600 text-xs font-semibold">*오전/오후 필수</span>{' '}
                          <span className="text-slate-500 text-xs font-normal">(시·분 모르면 비워두세요 → 12시 기준)</span>
                        </label>
                        <div className="grid grid-cols-12 gap-2">
                          <div className="col-span-5">
                            <select
                              value={ampm}
                              onChange={(e) => setAmpm(e.target.value as 'AM' | 'PM')}
                              required
                              className="w-full bg-white border border-[#d5c7b2] rounded-lg px-2.5 py-2.5 text-sm font-bold text-slate-900 outline-none focus:border-[#8c2323] cursor-pointer"
                            >
                              <option value="" disabled>오전/오후</option>
                              <option value="AM">오전 (AM)</option>
                              <option value="PM">오후 (PM)</option>
                            </select>
                          </div>
                          <div className="col-span-7 grid grid-cols-2 gap-1.5">
                            <div className="flex items-center bg-white border border-[#d5c7b2] rounded-lg px-2.5 focus-within:border-[#8c2323]">
                              <input
                                type="number"
                                value={birthHour}
                                onChange={(e) => setBirthHour(e.target.value)}
                                placeholder="12(기본)"
                                min={0}
                                max={12}
                                className="w-full py-2.5 text-sm font-medium text-slate-900 bg-transparent outline-none"
                              />
                              <span className="text-xs text-slate-500 shrink-0">시</span>
                            </div>
                            <div className="flex items-center bg-white border border-[#d5c7b2] rounded-lg px-2.5 focus-within:border-[#8c2323]">
                              <input
                                type="number"
                                value={birthMinute}
                                onChange={(e) => setBirthMinute(e.target.value)}
                                placeholder="00(기본)"
                                min={0}
                                max={59}
                                className="w-full py-2.5 text-sm font-medium text-slate-900 bg-transparent outline-none"
                              />
                              <span className="text-xs text-slate-500 shrink-0">분</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {errorMsg && (
                        <div className="p-3 rounded-lg bg-red-100 border border-red-300 text-red-800 text-xs font-semibold">
                          {errorMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-lg bg-gradient-to-b from-[#9e2424] to-[#7a1616] hover:from-[#b02929] hover:to-[#8a1919] text-white font-bold text-base shadow-md hover:shadow-lg transition cursor-pointer"
                      >
                        무료 사주 & MBTI 분석하기
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 하단 배너 3단 카드 (첨부 이미지 하단과 동일한 구성) */}
          <section className="bg-[#340c14] border-t border-amber-500/30 py-8 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-2xl bg-[#111930] border border-amber-400/30 p-6 text-center shadow-lg">
                <h3 className="font-serif-kr text-lg font-bold text-white mb-1">
                  오행 × 십성 <span className="text-amber-400">6대 영역 분석</span>
                </h3>
                <p className="text-xs text-slate-300">
                  재물·직업·표현·애정·건강·귀인운과 대박 비책까지 완벽 풀이
                </p>
              </div>
              <div className="rounded-2xl bg-[#111930] border border-amber-400/30 p-6 text-center shadow-lg">
                <p className="text-xs text-slate-300 mb-1">누적 사주·MBTI 분석 건수</p>
                <h3 className="font-serif-kr text-xl font-extrabold text-amber-400">
                  ✦ 1,200,000건 돌파 ✦
                </h3>
              </div>
              <div className="rounded-2xl bg-[#111930] border border-amber-400/30 p-6 text-center shadow-lg">
                <h3 className="font-serif-kr text-lg font-bold text-white mb-1">
                  2026·2027·2028 <span className="text-amber-400">3년 세운(歲運)</span>
                </h3>
                <p className="text-xs text-slate-300">
                  조심해야 할 리스크와 확 좋아지는 대운 타이밍 정밀 예측
                </p>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* 2. 결과 페이지 (SushiConveyorMenu 회전 컨베이어 + 사주팔자 오행·십성 + 2026~2028 3년 운세 + MBTI + 매칭 이미지) */}
      {analysis && (
        <main className="flex-1 pb-20">
          {/* 상단 요약 배너 */}
          <section className="bg-gradient-to-b from-[#172242] to-[#0d1326] border-b border-amber-500/25 py-8 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {analysis.input.name}님 ({analysis.input.gender === 'male' ? '남자·乾命' : '여자·坤命'}) ·{' '}
                    {analysis.input.year}년 {analysis.input.month}월 {analysis.input.day}일 ({analysis.input.calendarType === 'solar' ? '양력' : '음력'}){' '}
                    {analysis.input.ampm === 'AM' ? '오전' : '오후'} {analysis.input.hour12}시 {String(analysis.input.minute).padStart(2, '0')}분
                    {analysis.input.isTimeDefaulted && ' (시간미상 12시 기본적용)'}
                  </span>
                </div>
                <h1 className="font-serif-kr text-2xl sm:text-4xl font-bold text-white">
                  <span className="text-amber-400">{analysis.input.name}</span>님의 사주팔자 ×{' '}
                  <span className="text-purple-300">{analysis.mbti}</span> 종합 감정서
                </h1>
                <p className="text-slate-300 text-sm mt-1">
                  타고난 본원(일간)은 <strong className="text-amber-300">[{analysis.pillars.day.stem.hanja} {analysis.pillars.day.stem.kor} · {analysis.pillars.day.stem.name}]</strong>이며, 가장 강한 기운은 <strong className="text-emerald-300">{ELEMENT_META[analysis.strongestElement].label}</strong>입니다.
                </p>
              </div>

              {/* 매칭 상징 이미지 미니 카드 2장 */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-lg">
                  <img
                    src={ELEMENT_META[analysis.pillars.day.stem.element].image}
                    alt={analysis.pillars.day.stem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/70 text-[10px] text-center py-1 text-amber-200 font-medium">
                    본원: {analysis.pillars.day.stem.kor}
                  </div>
                </div>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-purple-400/60 shadow-lg">
                  <img
                    src={MBTI_PROFILES[analysis.mbti].image}
                    alt={analysis.mbti}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/70 text-[10px] text-center py-1 text-purple-200 font-medium">
                    팔자 MBTI: {analysis.mbti}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* [핵심 1] 요청하신 SushiConveyorMenu 컴포넌트를 적용한 인터랙티브 회전 운세 컨베이어 벨트 */}
          <section id="conveyor-section" className="border-b border-amber-500/20">
            <SushiConveyorMenu
              items={conveyorItems}
              legend={conveyorLegend}
              eyebrow="회전 운세 컨베이어 · 8대 핵심 감정 접시"
              heading={`${analysis.input.name}님의 운명 접시를 골라보세요`}
              caption="회전하는 운세 접시에 마우스를 올리거나 터치해 멈추고, 접시를 클릭하면 상세 조화·주의점·대박 비책 창이 열립니다!"
              autoplay={true}
              speed={24}
              labels={{
                add: '아래에서 이 영역 더 자세히 보기',
                close: '닫기',
                previous: '이전 운세 접시',
                next: '다음 운세 접시',
                pause: '벨트 일시정지'
              }}
              onAdd={(item) => {
                setSelectedDishId(item.id);
                const el = document.getElementById(`domain-${item.id}`) || document.getElementById('harmony-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              action={
                <a
                  href="#three-year-section"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md hover:bg-amber-300 transition"
                >
                  <Calendar className="w-4 h-4" />
                  2026·2027·2028 3년 대운 바로가기
                </a>
              }
            />
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14 mt-12">
            {/* [핵심 2] 사주 4주(연·월·일·시) 원국 & 오행(목화토금수) · 십성(十星) 조화 표 */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* 사주 원국 8글자 + 십성 표 */}
              <div className="lg:col-span-7 bg-[#141d36] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif-kr text-xl sm:text-2xl font-bold text-amber-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    사주팔자(四柱八字) 원국과 십성(十星)
                  </h2>
                  <span className="text-xs text-slate-400">오른쪽(연주) → 왼쪽(시주) 순서</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  태어난 연·월·일·시의 여덟 글자와 나를 기준으로 맺어지는 <strong>십성(十星: 비겁·식상·재성·관성·인성)</strong>의 배치입니다.
                </p>

                <div className="grid grid-cols-4 gap-2.5 sm:gap-4 text-center">
                  {[
                    { label: '시주(時柱)', sub: '자녀·말년·미래', data: analysis.pillars.hour, highlight: false },
                    { label: '일주(日柱)', sub: '나(본원)·배우자', data: analysis.pillars.day, highlight: true },
                    { label: '월주(月柱)', sub: '부모·직업·사회운', data: analysis.pillars.month, highlight: false },
                    { label: '연주(年柱)', sub: '조상·초년·첫인상', data: analysis.pillars.year, highlight: false }
                  ].map((col, idx) => {
                    const stemMeta = ELEMENT_META[col.data.stem.element];
                    const branchMeta = ELEMENT_META[col.data.branch.element];
                    return (
                      <div
                        key={idx}
                        className={`rounded-2xl p-3 sm:p-4 border ${
                          col.highlight
                            ? 'bg-amber-500/10 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                            : 'bg-[#0d1428] border-white/10'
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-bold text-white">{col.label}</div>
                        <div className="text-[11px] text-slate-400 mb-2">{col.sub}</div>

                        {/* 천간 십성 */}
                        <div className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 rounded-md py-1 mb-2">
                          {col.data.stemTenGod.name}
                        </div>

                        {/* 천간 글자 */}
                        <div className={`rounded-xl border p-2.5 sm:p-3 mb-2 ${stemMeta.bgClass}`}>
                          <div className="font-serif-kr text-2xl sm:text-3xl font-bold">{col.data.stem.hanja}</div>
                          <div className="text-[11px] font-medium mt-0.5">{col.data.stem.kor}</div>
                        </div>

                        {/* 지지 글자 */}
                        <div className={`rounded-xl border p-2.5 sm:p-3 mb-2 ${branchMeta.bgClass}`}>
                          <div className="font-serif-kr text-2xl sm:text-3xl font-bold">{col.data.branch.hanja}</div>
                          <div className="text-[11px] font-medium mt-0.5">
                            {col.data.branch.kor}({col.data.branch.animal})
                          </div>
                        </div>

                        {/* 지지 십성 */}
                        <div className="text-[11px] font-semibold text-sky-300 bg-sky-500/10 rounded-md py-1">
                          {col.data.branchTenGod.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 오행(목·화·토·금·수) & 십성 에너지 밸런스 차트 */}
              <div className="lg:col-span-5 bg-[#141d36] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <h2 className="font-serif-kr text-xl sm:text-2xl font-bold text-amber-300 mb-2">
                    🌿 오행(五行) & 십성(十星) 에너지 조화
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mb-5">
                    목·화·토·금·수의 비율과 십성 분포를 통해 어느 삶의 영역에 힘이 실려 있는지 확인하세요.
                  </p>

                  {/* 오행 프로그레스 바 */}
                  <div className="space-y-3 mb-6">
                    {(Object.keys(ELEMENT_META) as ('wood' | 'fire' | 'earth' | 'metal' | 'water')[]).map((elKey) => {
                      const meta = ELEMENT_META[elKey];
                      const val = analysis.elementCounts[elKey];
                      const pct = Math.min(100, Math.round((val / 10) * 100));
                      return (
                        <div key={elKey} className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold">
                            <span style={{ color: meta.color }}>{meta.label} — {meta.trait}</span>
                            <span className="text-slate-300">{pct}%</span>
                          </div>
                          <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{ width: `${Math.max(8, pct)}%`, backgroundColor: meta.color }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 십성 5분류 요약 뱃지 */}
                <div className="bg-[#0d1428] border border-white/10 rounded-2xl p-4">
                  <div className="text-xs font-bold text-amber-200 mb-2.5">✦ 나의 십성(十星) 5대 세력 분포</div>
                  <div className="grid grid-cols-5 gap-1.5 text-center">
                    {Object.entries(analysis.tenGodCounts).map(([groupName, score]) => (
                      <div key={groupName} className="bg-slate-900/90 border border-white/10 rounded-xl p-2">
                        <div className="text-[10px] text-slate-400 truncate">{groupName.split('(')[0]}</div>
                        <div className="text-sm font-extrabold text-amber-300 mt-0.5">{score.toFixed(1)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* [핵심 3] 오행과 십성의 조화를 통한 삶의 6대 구체적 영역 정밀 해석 (주의점 & 확 좋아지는 대박 포인트 + 매칭 이미지) */}
            <section id="harmony-section" className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Harmony of Five Elements & Ten Gods
                  </span>
                  <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-white mt-1">
                    오행·십성의 조화로 본 삶의 6대 영역 정밀 풀이
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">
                  각 영역별로 <span className="text-rose-300 font-semibold">조심해야 할 부분</span>과{' '}
                  <span className="text-emerald-300 font-semibold">확 좋게 변할 수 있는 대박 포인트</span>를 꼭 확인하세요!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {analysis.lifeDomains.map((dom) => {
                  const isHighlighted = selectedDishId === dom.id;
                  return (
                    <article
                      key={dom.id}
                      id={`domain-${dom.id}`}
                      className={`rounded-3xl bg-[#141d36] border transition-all overflow-hidden shadow-xl flex flex-col ${
                        isHighlighted
                          ? 'border-amber-400 ring-2 ring-amber-400/40'
                          : 'border-white/10 hover:border-amber-400/50'
                      }`}
                    >
                      {/* 상단 매칭 이미지 헤더 */}
                      <div className="relative h-44 w-full overflow-hidden">
                        <img
                          src={dom.image}
                          alt={dom.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141d36] via-[#141d36]/40 to-transparent" />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                          {dom.tags.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/65 text-amber-200 border border-amber-400/30 backdrop-blur-xs"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                        <div className="absolute bottom-3 left-5 right-5 flex items-end justify-between">
                          <div>
                            <div className="text-xs font-semibold text-amber-300">{dom.category}</div>
                            <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-white">{dom.title}</h3>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs">
                            {dom.score}
                          </span>
                        </div>
                      </div>

                      {/* 본문: 오행·십성 조화 해설 + 조심할 부분 + 확 좋아지는 부분 */}
                      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <p className="text-sm text-slate-200 leading-relaxed">
                          {dom.harmonyAnalysis}
                        </p>

                        <div className="space-y-3 pt-2">
                          <div className="rounded-2xl bg-rose-950/40 border border-rose-500/35 p-4">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-300 mb-1">
                              <ShieldAlert className="w-4 h-4 shrink-0" />
                              <span>조심해야 하는 부분 (리스크 관리)</span>
                            </div>
                            <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                              {dom.cautionDetail}
                            </p>
                          </div>

                          <div className="rounded-2xl bg-emerald-950/40 border border-emerald-500/35 p-4">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 mb-1">
                              <TrendingUp className="w-4 h-4 shrink-0" />
                              <span>확 좋게 변할 수 있는 대박 포인트 (개운 비책)</span>
                            </div>
                            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                              {dom.boomDetail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* [핵심 4] 올해 포함 향후 3년간 (2026년, 2027년, 2028년) 6대 영역별 세운 & 주의점/대박 포인트 */}
            <section id="three-year-section" className="bg-[#141d36] border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Flame className="w-4 h-4" />
                    2026 · 2027 · 2028 Three-Year Fortune Roadmap
                  </span>
                  <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-white mt-1">
                    향후 3년간 (2026년~2028년) 연도별 6대 운세 정밀 예측
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    연도 버튼을 클릭하면 해당 연도의 <strong>재물·직업·표현·애정·건강·대인관계운</strong>과 주의점/급상승 포인트를 볼 수 있습니다.
                  </p>
                </div>

                {/* 연도 선택 탭 버튼 (모바일 터치 친화적) */}
                <div className="flex rounded-2xl bg-[#0b1021] p-1.5 border border-amber-500/30 self-start md:self-auto">
                  {analysis.threeYearFortunes.map((yf) => (
                    <button
                      key={yf.year}
                      type="button"
                      onClick={() => setSelectedYear(yf.year)}
                      className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                        selectedYear === yf.year
                          ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-md'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {yf.year}년 ({yf.ganjiHanja})
                    </button>
                  ))}
                </div>
              </div>

              {analysis.threeYearFortunes
                .filter((yf) => yf.year === selectedYear)
                .map((yf) => (
                  <div key={yf.year} className="mt-6 space-y-6">
                    {/* 선택된 연도 총평 헤더 */}
                    <div className="rounded-2xl bg-gradient-to-r from-amber-500/15 via-purple-500/10 to-amber-500/15 border border-amber-400/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs">
                            {yf.year}년 세운(歲運)
                          </span>
                          <span className="text-sm font-bold text-amber-300">{yf.ganjiName}</span>
                          <span className="text-xs text-purple-300 font-semibold">· {yf.yearTenGod}</span>
                        </div>
                        <p className="text-sm sm:text-base text-white font-medium mt-2">{yf.yearTheme}</p>
                      </div>
                    </div>

                    {/* 해당 연도의 6대 영역 그리드 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {Object.entries(yf.domains).map(([key, dom]) => (
                        <div
                          key={key}
                          className="rounded-2xl bg-[#0d1428] border border-white/10 p-5 flex flex-col justify-between space-y-4 hover:border-amber-400/40 transition"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-serif-kr text-lg font-bold text-amber-300">{dom.title}</h3>
                              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/30">
                                운세지수 {dom.score}점
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{dom.summary}</p>
                          </div>

                          <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs">
                            <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-200">
                              <strong className="block text-rose-300 mb-0.5">⚠️ {yf.year}년 조심할 점:</strong>
                              {dom.caution}
                            </div>
                            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                              <strong className="block text-emerald-300 mb-0.5">🚀 확 좋아지는 대박 비책:</strong>
                              {dom.boom}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </section>

            {/* [핵심 5] 현대식 사주 MBTI 성향 해석 & 타고난 장단점 + 매칭 갤러리 */}
            <section id="mbti-section" className="bg-gradient-to-br from-[#1b1638] via-[#141d36] to-[#1b2438] border border-purple-400/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 flex flex-col items-center text-center">
                  <span className="px-3.5 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs font-bold mb-3">
                    사주팔자 오행·음양 × 현대 MBTI 매칭
                  </span>
                  <div className="text-5xl sm:text-6xl font-black tracking-wider bg-gradient-to-r from-amber-300 via-white to-purple-300 bg-clip-text text-transparent mb-2">
                    {analysis.mbti}
                  </div>
                  <div className="font-serif-kr text-lg sm:text-xl font-bold text-amber-300 mb-4">
                    "{MBTI_PROFILES[analysis.mbti].nickname}"
                  </div>

                  <div className="w-full max-w-xs rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-xl mb-4">
                    <img
                      src={MBTI_PROFILES[analysis.mbti].image}
                      alt={analysis.mbti}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {MBTI_PROFILES[analysis.mbti].summary}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  {/* 4가지 MBTI 지표가 사주에서 나온 이유 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-[#0d1326]/90 border border-white/10 rounded-2xl p-4">
                      <div className="text-xs font-bold text-purple-300 mb-1">에너지 방향 : {analysis.mbti[0]}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{analysis.axesReason.ei}</p>
                    </div>
                    <div className="bg-[#0d1326]/90 border border-white/10 rounded-2xl p-4">
                      <div className="text-xs font-bold text-purple-300 mb-1">인식 방식 : {analysis.mbti[1]}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{analysis.axesReason.ns}</p>
                    </div>
                    <div className="bg-[#0d1326]/90 border border-white/10 rounded-2xl p-4">
                      <div className="text-xs font-bold text-purple-300 mb-1">판단 기준 : {analysis.mbti[2]}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{analysis.axesReason.tf}</p>
                    </div>
                    <div className="bg-[#0d1326]/90 border border-white/10 rounded-2xl p-4">
                      <div className="text-xs font-bold text-purple-300 mb-1">생활 양식 : {analysis.mbti[3]}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{analysis.axesReason.jp}</p>
                    </div>
                  </div>

                  {/* 장단점 비교 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-emerald-950/35 border border-emerald-500/40 p-5">
                      <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-1.5 mb-3">
                        <Award className="w-4 h-4" />
                        타고난 강점 (살려야 할 무기)
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-200 list-disc pl-4">
                        {MBTI_PROFILES[analysis.mbti].pros.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-rose-950/35 border border-rose-500/40 p-5">
                      <h4 className="text-sm font-bold text-rose-300 flex items-center gap-1.5 mb-3">
                        <AlertTriangle className="w-4 h-4" />
                        주의할 단점 (보완 포인트)
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-200 list-disc pl-4">
                        {MBTI_PROFILES[analysis.mbti].cons.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* [핵심 6] 결과와 매칭되는 행운의 이미지 갤러리 (수호 오행 · 행운 공간 · 귀인 오브제) */}
            <section className="space-y-4">
              <h2 className="font-serif-kr text-xl sm:text-2xl font-bold text-amber-300 flex items-center gap-2">
                <Star className="w-5 h-5" />
                {analysis.input.name}님의 사주 기운과 매칭되는 행운(開運) 이미지 카드
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="rounded-2xl overflow-hidden bg-[#141d36] border border-white/10 shadow-lg">
                  <img
                    src={ELEMENT_META[analysis.pillars.day.stem.element].image}
                    alt="본원 수호 이미지"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-[11px] font-bold text-amber-400">01 · 나의 본원(일간) 상징</span>
                    <h4 className="font-bold text-white mt-0.5">{analysis.pillars.day.stem.name} ({analysis.pillars.day.stem.kor})</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      당신의 중심을 잡아주는 타고난 생명력입니다. 흔들릴 때마다 본연의 {ELEMENT_META[analysis.pillars.day.stem.element].trait}을 기억하세요.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden bg-[#141d36] border border-white/10 shadow-lg">
                  <img
                    src={ELEMENT_META[analysis.weakestElement].image}
                    alt="용신 보완 이미지"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-[11px] font-bold text-emerald-400">02 · 행운을 부르는 보완 오행(용신)</span>
                    <h4 className="font-bold text-white mt-0.5">{ELEMENT_META[analysis.weakestElement].label} 에너지</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      사주에서 부족한 {ELEMENT_META[analysis.weakestElement].label} 풍경이나 색상을 휴대폰 배경화면·인테리어에 두면 막힌 운이 확 풀립니다!
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden bg-[#141d36] border border-white/10 shadow-lg">
                  <img
                    src={MBTI_PROFILES[analysis.mbti].image}
                    alt="사회적 성공 이미지"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-[11px] font-bold text-purple-300">03 · {analysis.mbti} 천직 & 성공 무대</span>
                    <h4 className="font-bold text-white mt-0.5">{MBTI_PROFILES[analysis.mbti].nickname}</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      2026~2028년 대운 속에서 당신의 재능이 가장 빛나게 발휘될 사회적 무대의 모습입니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      )}

      <footer className="bg-[#080c18] border-t border-white/10 py-6 px-4 text-center text-xs text-slate-400">
        © 2026 던힐 사주 × 현대 MBTI 명리연구소 · 모바일 & PC 반응형 지원 · 정통 만세력 오행·십성 및 3년 세운 알고리즘
      </footer>
    </div>
  );
}
