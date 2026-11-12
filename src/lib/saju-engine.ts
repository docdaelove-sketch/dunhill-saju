export interface StemInfo {
  hanja: string;
  kor: string;
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  yinYang: 'yang' | 'yin';
  name: string;
}

export interface BranchInfo {
  hanja: string;
  kor: string;
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  yinYang: 'yang' | 'yin';
  animal: string;
}

export const STEMS: StemInfo[] = [
  { hanja: '甲', kor: '갑목', element: 'wood', yinYang: 'yang', name: '우직한 대림목(소나무)' },
  { hanja: '乙', kor: '을목', element: 'wood', yinYang: 'yin', name: '끈기 있는 화초·덩굴' },
  { hanja: '丙', kor: '병화', element: 'fire', yinYang: 'yang', name: '세상을 비추는 태양' },
  { hanja: '丁', kor: '정화', element: 'fire', yinYang: 'yin', name: '은은하고 따뜻한 촛불·달빛' },
  { hanja: '戊', kor: '무토', element: 'earth', yinYang: 'yang', name: '만물을 품은 웅장한 태산' },
  { hanja: '己', kor: '기토', element: 'earth', yinYang: 'yin', name: '생명을 키우는 비옥한 대지' },
  { hanja: '庚', kor: '경금', element: 'metal', yinYang: 'yang', name: '단단한 바위와 무쇠' },
  { hanja: '辛', kor: '신금', element: 'metal', yinYang: 'yin', name: '정교하게 다듬어진 보석' },
  { hanja: '壬', kor: '임수', element: 'water', yinYang: 'yang', name: '깊고 넓은 바다·큰 강' },
  { hanja: '癸', kor: '계수', element: 'water', yinYang: 'yin', name: '대지를 적시는 단비·옹달샘' }
];

export const BRANCHES: BranchInfo[] = [
  { hanja: '子', kor: '자수', element: 'water', yinYang: 'yang', animal: '쥐' },
  { hanja: '丑', kor: '축토', element: 'earth', yinYang: 'yin', animal: '소' },
  { hanja: '寅', kor: '인목', element: 'wood', yinYang: 'yang', animal: '호랑이' },
  { hanja: '卯', kor: '묘목', element: 'wood', yinYang: 'yin', animal: '토끼' },
  { hanja: '辰', kor: '진토', element: 'earth', yinYang: 'yang', animal: '용' },
  { hanja: '巳', kor: '사화', element: 'fire', yinYang: 'yin', animal: '뱀' },
  { hanja: '午', kor: '오화', element: 'fire', yinYang: 'yang', animal: '말' },
  { hanja: '未', kor: '미토', element: 'earth', yinYang: 'yin', animal: '양' },
  { hanja: '申', kor: '신금', element: 'metal', yinYang: 'yang', animal: '원숭이' },
  { hanja: '酉', kor: '유금', element: 'metal', yinYang: 'yin', animal: '닭' },
  { hanja: '戌', kor: '술토', element: 'earth', yinYang: 'yang', animal: '개' },
  { hanja: '亥', kor: '해수', element: 'water', yinYang: 'yin', animal: '돼지' }
];

export const ELEMENT_META = {
  wood: {
    label: '목(木·나무)',
    hanja: '木',
    color: '#10b981',
    bgClass: 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300',
    trait: '성장과 시작, 어진 마음(仁), 기획력',
    organ: '간장·담낭·신경계·근육',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80'
  },
  fire: {
    label: '화(火·불)',
    hanja: '火',
    color: '#ef4444',
    bgClass: 'bg-rose-500/20 border-rose-400/50 text-rose-300',
    trait: '열정과 확산, 예의(禮), 화려한 표현력',
    organ: '심장·소장·혈액순환·안구',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80'
  },
  earth: {
    label: '토(土·흙)',
    hanja: '土',
    color: '#f59e0b',
    bgClass: 'bg-amber-500/20 border-amber-400/50 text-amber-300',
    trait: '중재와 포용, 믿음(信), 부동산·기반',
    organ: '위장·비장·소화기·피부',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=80'
  },
  metal: {
    label: '금(金·쇠)',
    hanja: '金',
    color: '#cbd5e1',
    bgClass: 'bg-slate-400/20 border-slate-300/50 text-slate-100',
    trait: '결단과 결실, 의리(義), 원칙과 분별력',
    organ: '폐·대장·호흡기·뼈와 치아',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80'
  },
  water: {
    label: '수(水·물)',
    hanja: '水',
    color: '#3b82f6',
    bgClass: 'bg-blue-500/20 border-blue-400/50 text-blue-300',
    trait: '지혜와 유연함, 지성(智), 깊은 통찰력',
    organ: '신장·방광·면역력·호르몬',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80'
  }
} as const;

const ELEMENT_ORDER: ('wood' | 'fire' | 'earth' | 'metal' | 'water')[] = ['wood', 'fire', 'earth', 'metal', 'water'];

export type TenGodGroup = '비겁(자아·독립)' | '식상(표현·실행)' | '재성(재물·결실)' | '관성(직업·명예)' | '인성(학문·귀인)';

export interface TenGodResult {
  name: string;
  group: TenGodGroup;
}

// 일간(나)과 대상 오행/음양을 비교해 십성(十星) 산출
export function getTenGod(
  dayMaster: { element: 'wood' | 'fire' | 'earth' | 'metal' | 'water'; yinYang: 'yang' | 'yin' },
  target: { element: 'wood' | 'fire' | 'earth' | 'metal' | 'water'; yinYang: 'yang' | 'yin' },
  isSelf = false
): TenGodResult {
  if (isSelf) return { name: '본원(일간)', group: '비겁(자아·독립)' };
  const dIdx = ELEMENT_ORDER.indexOf(dayMaster.element);
  const tIdx = ELEMENT_ORDER.indexOf(target.element);
  const diff = (tIdx - dIdx + 5) % 5;
  const samePolarity = dayMaster.yinYang === target.yinYang;

  switch (diff) {
    case 0:
      return { name: samePolarity ? '비견(比肩)' : '겁재(劫財)', group: '비겁(자아·독립)' };
    case 1:
      return { name: samePolarity ? '식신(食神)' : '상관(傷官)', group: '식상(표현·실행)' };
    case 2:
      return { name: samePolarity ? '편재(偏財)' : '정재(正財)', group: '재성(재물·결실)' };
    case 3:
      return { name: samePolarity ? '편관(偏官)' : '정관(正官)', group: '관성(직업·명예)' };
    case 4:
    default:
      return { name: samePolarity ? '편인(偏印)' : '정인(正印)', group: '인성(학문·귀인)' };
  }
}

export const MBTI_PROFILES: Record<string, {
  nickname: string;
  summary: string;
  image: string;
  pros: string[];
  cons: string[];
}> = {
  ENTJ: {
    nickname: '천하를 호령하는 대장군형 팔자',
    summary: '관성(리더십)과 재성(결과)의 기운이 뚜렷하여 큰 조직이나 목표를 승리로 이끄는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    pros: ['목표가 생기면 끝까지 밀고 나가는 강력한 추진력', '복잡한 문제를 단번에 정리하는 뛰어난 리더십', '감정에 휘둘리지 않고 효율적으로 결단을 내림'],
    cons: ['결과를 급하게 추구하다 주변 사람의 감정을 놓칠 수 있음', '본인의 기준이 높아 스스로와 타인에게 엄격해지기 쉬움']
  },
  ENFJ: {
    nickname: '사람을 키우고 세상을 밝히는 교육자형 팔자',
    summary: '따뜻한 식상(표현)과 인성(배려)이 조화를 이루어 주변에 귀인이 모이고 사람을 살리는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    pros: ['주변 사람들의 장점을 발견하고 이끌어주는 따뜻한 카리스마', '뛰어난 공감 능력과 화술로 어디서나 중심 인물이 됨', '공동체의 화합을 중요하게 여기는 책임감'],
    cons: ['남을 챙기느라 정작 내 에너지를 과하게 소모할 수 있음', '거절을 어려워하고 타인의 시선에 신경을 많이 씀']
  },
  ESTJ: {
    nickname: '원칙과 질서로 조직을 세우는 재상형 팔자',
    summary: '정관(명예)과 정재(안정적 재물)의 기운이 바르게 자리 잡아 신용과 성실함으로 큰 성취를 이루는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    pros: ['약속과 규칙을 철저히 지키는 믿음직한 성실함', '현실적인 감각이 뛰어나고 일 처리가 빈틈없이 깔끔함', '위기 상황에서도 흔들리지 않는 책임감'],
    cons: ['새로운 변화나 예외 상황을 받아들이는 데 시간이 걸림', '융통성이 부족하거나 직설적인 표현으로 오해를 살 수 있음']
  },
  ESFJ: {
    nickname: '모두를 화목하게 품어주는 복덕방형 팔자',
    summary: '사람을 끌어당기는 다정한 기운이 강해 대인관계가 곧 재물과 복으로 이어지는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80',
    pros: ['주변 사람을 세심하게 챙기는 다정함과 뛰어난 친화력', '예의 바르고 협동심이 강해 조직 생활에 매우 유리함', '실용적이고 현실적인 도움을 주는 스타일'],
    cons: ['감정 기복이 있는 편이며 서운한 일이 있으면 오래 담아둠', '갈등 상황을 피하려다 본인의 진짜 속마음을 숨기기도 함']
  },
  ENTP: {
    nickname: '틀을 깨고 새로운 길을 여는 혁명가형 팔자',
    summary: '상관(창의적 돌파력)과 편재(큰 무대)의 기운이 만나 남들이 가지 않은 길에서 대박을 터뜨리는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    pros: ['남들이 생각하지 못하는 기발한 아이디어와 두뇌 회전', '다재다능하고 임기응변에 강해 어떤 환경에서도 살아남음', '지적 호기심이 넘치고 토론과 대화를 즐김'],
    cons: ['시작은 화려하지만 반복되는 일상적인 마무리에 지루함을 느낌', '규칙이나 구속이 강한 환경에서는 답답함을 크게 느낌']
  },
  ENFP: {
    nickname: '세상을 축제로 만드는 자유로운 예술가형 팔자',
    summary: '화려한 식상(표현력)의 꽃이 피어나 어디를 가든 인기를 얻고 창의적인 재능으로 빛나는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    pros: ['주변까지 기분 좋게 만드는 밝고 긍정적인 에너지', '새로운 사람, 새로운 일에 대한 두려움이 없는 도전 정신', '풍부한 상상력과 뛰어난 공감 능력'],
    cons: ['관심사가 자주 바뀌어 한 가지 일에 오래 집중하기 힘들 수 있음', '감정에 따라 컨디션과 일의 능률 차이가 크게 나타남']
  },
  ESTP: {
    nickname: '현장을 누비며 기회를 잡는 승부사형 팔자',
    summary: '강한 행동력과 재물 감각이 결합되어 위기를 기회로 바꾸고 현장에서 승부를 보는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
    pros: ['생각보다 행동이 먼저 나가는 시원시원한 실행력', '눈치가 빠르고 위기 대처 능력이 탁월한 현실 감각', '사람들과 어울리기 좋아하고 유머 감각이 뛰어남'],
    cons: ['장기적인 계획보다는 당장의 재미와 성과를 우선하기 쉬움', '참을성이 부족해 지루한 과정을 견디기 힘들어함']
  },
  ESFP: {
    nickname: '인생의 즐거움을 아는 타고난 스타형 팔자',
    summary: '식신생재(즐겁게 일해 재물을 만듦)의 기운이 흘러 넘쳐 의식주가 풍요롭고 주변에 웃음이 끊이지 않는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    pros: ['어디를 가나 분위기를 띄우는 사교성과 낙천적인 성격', '오감이 발달해 멋과 맛, 트렌드를 빠르게 읽는 감각', '정이 많고 타인에게 베풀기를 좋아하는 화끈함'],
    cons: ['기분에 따라 충동적인 소비나 결정을 내릴 때가 있음', '진지하고 무거운 주제나 장기 계획을 피하려는 경향']
  },
  INTJ: {
    nickname: '백 년 앞을 내다보는 냉철한 책사형 팔자',
    summary: '깊은 인성(통찰력)과 관성(원칙)이 결합되어 치밀한 전략과 독보적인 전문성으로 정상에 오르는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    pros: ['전체 흐름을 꿰뚫어 보는 깊은 통찰력과 전략적 사고', '혼자서도 목표를 완벽하게 해내는 높은 독립심과 집중력', '감정에 흔들리지 않는 합리적이고 객관적인 판단'],
    cons: ['속마음을 잘 드러내지 않아 차갑거나 다가가기 어렵다는 인상을 줌', '완벽주의 성향 때문에 본인의 기준에 맞지 않으면 답답해함']
  },
  INFJ: {
    nickname: '조용히 사람의 마음을 읽는 현자형 팔자',
    summary: '영적인 직관력과 따뜻한 품성을 동시에 지녀 사람들의 마음을 치유하고 정신적 리더가 되는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
    pros: ['말하지 않아도 상대의 감정을 깊이 이해하는 통찰력', '자신만의 뚜렷한 철학과 신념을 지키는 단단한 내면', '창의적이면서도 계획적으로 꿈을 실현해 나가는 힘'],
    cons: ['생각이 너무 많아 시작하기 전에 걱정이 앞설 때가 있음', '인간관계에서 상처를 받으면 조용히 마음의 문을 닫아버림']
  },
  ISTJ: {
    nickname: '한결같은 성실함으로 신뢰를 쌓는 장인형 팔자',
    summary: '차곡차곡 쌓이는 정재(알뜰한 재물)와 정관(바른 생활)의 힘으로 흔들림 없는 부와 명예를 축적하는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    pros: ['한 번 맡은 일은 끝까지 책임지고 해내는 우직함과 성실함', '신중하고 꼼꼼해서 실수가 거의 없는 안정감', '절약 정신과 자기 관리가 철저해 말년으로 갈수록 탄탄해짐'],
    cons: ['익숙한 방식만 고집해 새로운 도전을 망설일 수 있음', '감정 표현이 서툴러 속정이 깊어도 겉으로 잘 드러나지 않음']
  },
  ISFJ: {
    nickname: '묵묵히 내 사람들을 지키는 수호천사형 팔자',
    summary: '인성(어머니 같은 포용력)과 식신(베풂)이 조화로워 평생 주변의 신뢰와 윗사람의 사랑을 받는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80',
    pros: ['세심하고 배려심이 깊어 주변 사람들에게 큰 편안함을 줌', '인내심이 강하고 맡은 역할을 성실히 수행하는 책임감', '작은 디테일과 상대방의 사소한 취향까지 기억하는 섬세함'],
    cons: ['남의 부탁을 거절하지 못해 혼자 스트레스를 쌓아두기 쉬움', '변화가 많은 환경이나 경쟁이 치열한 곳에서 피로감을 느낌']
  },
  INTP: {
    nickname: '세상의 원리를 탐구하는 천재 학자형 팔자',
    summary: '편인(독창적 학문·아이디어)과 식상(깊은 연구)이 빛을 발해 남들이 흉내 낼 수 없는 전문 분야를 개척하는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80',
    pros: ['남들이 보지 못하는 본질을 파악하는 뛰어난 분석력', '편견 없이 새로운 지식과 아이디어를 흡수하는 유연한 사고', '독창적이고 논리적인 문제 해결 능력'],
    cons: ['머릿속 생각은 완벽하지만 실제 행동으로 옮기는 데 시간이 걸림', '관심 없는 분야나 형식적인 인간관계에는 에너지를 쓰지 않음']
  },
  INFP: {
    nickname: '순수한 이상과 낭만을 품은 시인형 팔자',
    summary: '맑은 감수성과 예술적 기운이 가득해 본인의 마음이 가는 일을 할 때 놀라운 몰입과 성취를 이루는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    pros: ['타인의 아픔에 깊이 공감하는 따뜻하고 부드러운 마음씨', '자신만의 가치관과 개성이 뚜렷하며 예술적 감수성이 풍부함', '조용하지만 내면에 강한 신념을 간직한 외유내강형'],
    cons: ['현실적인 계산이나 치열한 경쟁 상황에서 쉽게 지칠 수 있음', '사소한 말에도 의미를 부여하며 혼자 상처받기 쉬움']
  },
  ISTP: {
    nickname: '최소의 에너지로 최고의 효율을 내는 마스터형 팔자',
    summary: '날카로운 금·수의 지혜와 손기술(식신)이 발달하여 실무 능력과 위기 대처에서 최고로 인정받는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    pros: ['위기 상황에서도 당황하지 않고 핵심만 해결하는 침착함', '손재주나 기술적 감각이 뛰어나고 효율성을 극대화함', '남의 일에 간섭하지 않고 내 삶도 자유롭게 즐기는 쿨한 성격'],
    cons: ['귀찮은 일을 미루는 경향이 있고 감정 표현에 인색함', '구속받거나 불필요한 회의·형식이 많은 환경을 싫어함']
  },
  ISFP: {
    nickname: '자연을 닮은 온화하고 평화로운 선비형 팔자',
    summary: '부드러운 오행의 흐름을 타고나 큰 풍파 없이 평온하며 예술적 감각과 인복이 자연스레 따르는 사주입니다.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
    pros: ['누구와도 모나지 않게 어울리는 부드럽고 온화한 성품', '현재의 순간을 소중히 여기며 미적·예술적 감각이 뛰어남', '겸손하고 상대방을 있는 그대로 존중해 주는 포용력'],
    cons: ['결정을 내릴 때 우유부단해지거나 결단을 미루기 쉬움', '스트레스를 받으면 해결하기보다 혼자 동굴로 들어가 쉬려 함']
  }
};

export interface YearlyDomainFortune {
  year: number;
  ganjiName: string;
  ganjiHanja: string;
  yearTheme: string;
  yearTenGod: string;
  domains: {
    wealth: { title: string; score: number; summary: string; caution: string; boom: string };
    career: { title: string; score: number; summary: string; caution: string; boom: string };
    expression: { title: string; score: number; summary: string; caution: string; boom: string };
    love: { title: string; score: number; summary: string; caution: string; boom: string };
    health: { title: string; score: number; summary: string; caution: string; boom: string };
    relationship: { title: string; score: number; summary: string; caution: string; boom: string };
  };
}

export interface FullSajuAnalysis {
  input: {
    name: string;
    year: number;
    month: number;
    day: number;
    calendarType: 'solar' | 'lunar';
    gender: 'male' | 'female';
    ampm: 'AM' | 'PM';
    hour12: number;
    minute: number;
    isTimeDefaulted: boolean;
  };
  pillars: {
    year: { stem: StemInfo; branch: BranchInfo; stemTenGod: TenGodResult; branchTenGod: TenGodResult };
    month: { stem: StemInfo; branch: BranchInfo; stemTenGod: TenGodResult; branchTenGod: TenGodResult };
    day: { stem: StemInfo; branch: BranchInfo; stemTenGod: TenGodResult; branchTenGod: TenGodResult };
    hour: { stem: StemInfo; branch: BranchInfo; stemTenGod: TenGodResult; branchTenGod: TenGodResult };
  };
  elementCounts: Record<'wood' | 'fire' | 'earth' | 'metal' | 'water', number>;
  tenGodCounts: Record<TenGodGroup, number>;
  strongestElement: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  weakestElement: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  mbti: string;
  axesReason: { ei: string; ns: string; tf: string; jp: string };
  lifeDomains: {
    id: string;
    category: string;
    title: string;
    score: string;
    tier: 1 | 2 | 3 | 4 | 5;
    image: string;
    shortDesc: string;
    harmonyAnalysis: string;
    cautionDetail: string;
    boomDetail: string;
    tags: string[];
  }[];
  threeYearFortunes: YearlyDomainFortune[];
}

export function analyzeSajuAndMbti(params: {
  name: string;
  year: number;
  month: number;
  day: number;
  calendarType: 'solar' | 'lunar';
  gender: 'male' | 'female';
  ampm: 'AM' | 'PM';
  hour12: number;
  minute: number;
  hour24: number;
  isTimeDefaulted: boolean;
}): FullSajuAnalysis {
  const calcDate = new Date(params.year, params.month - 1, params.day);
  if (params.calendarType === 'lunar') {
    calcDate.setDate(calcDate.getDate() + 29);
  }

  const y = calcDate.getFullYear();
  const m = calcDate.getMonth() + 1;
  const d = calcDate.getDate();

  const yearStemIdx = ((y - 4) % 10 + 10) % 10;
  const yearBranchIdx = ((y - 4) % 12 + 12) % 12;

  const monthBranchIdx = (m + 12) % 12;
  const monthStemStart = ((yearStemIdx % 5) * 2 + 2) % 10;
  const monthOffset = ((m - 2) + 12) % 12;
  const monthStemIdx = (monthStemStart + monthOffset) % 10;

  const baseDate = Date.UTC(1900, 0, 1);
  const targetDate = Date.UTC(y, m - 1, d);
  const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
  const dayStemIdx = ((diffDays % 10) + 10) % 10;
  const dayBranchIdx = (((diffDays + 10) % 12) + 12) % 12;

  const totalMinutes = params.hour24 * 60 + params.minute;
  const hourBranchIdx = Math.floor(((totalMinutes + 60) % 1440) / 120);
  const hourStemIdx = ((dayStemIdx % 5) * 2 + hourBranchIdx) % 10;

  const dayMaster = STEMS[dayStemIdx];

  const pillars = {
    year: {
      stem: STEMS[yearStemIdx],
      branch: BRANCHES[yearBranchIdx],
      stemTenGod: getTenGod(dayMaster, STEMS[yearStemIdx]),
      branchTenGod: getTenGod(dayMaster, BRANCHES[yearBranchIdx])
    },
    month: {
      stem: STEMS[monthStemIdx],
      branch: BRANCHES[monthBranchIdx],
      stemTenGod: getTenGod(dayMaster, STEMS[monthStemIdx]),
      branchTenGod: getTenGod(dayMaster, BRANCHES[monthBranchIdx])
    },
    day: {
      stem: dayMaster,
      branch: BRANCHES[dayBranchIdx],
      stemTenGod: getTenGod(dayMaster, dayMaster, true),
      branchTenGod: getTenGod(dayMaster, BRANCHES[dayBranchIdx])
    },
    hour: {
      stem: STEMS[hourStemIdx],
      branch: BRANCHES[hourBranchIdx],
      stemTenGod: getTenGod(dayMaster, STEMS[hourStemIdx]),
      branchTenGod: getTenGod(dayMaster, BRANCHES[hourBranchIdx])
    }
  };

  const elementCounts: Record<'wood' | 'fire' | 'earth' | 'metal' | 'water', number> = {
    wood: 0, fire: 0, earth: 0, metal: 0, water: 0
  };
  const tenGodCounts: Record<TenGodGroup, number> = {
    '비겁(자아·독립)': 0,
    '식상(표현·실행)': 0,
    '재성(재물·결실)': 0,
    '관성(직업·명예)': 0,
    '인성(학문·귀인)': 0
  };

  let yangScore = 0;
  let yinScore = 0;

  const charEntries = [
    { item: pillars.year.stem, tg: pillars.year.stemTenGod, w: 1 },
    { item: pillars.year.branch, tg: pillars.year.branchTenGod, w: 1 },
    { item: pillars.month.stem, tg: pillars.month.stemTenGod, w: 1 },
    { item: pillars.month.branch, tg: pillars.month.branchTenGod, w: 1.5 }, // 월지(계절) 가중치
    { item: pillars.day.stem, tg: pillars.day.stemTenGod, w: 2 },          // 일간(본원) 가중치
    { item: pillars.day.branch, tg: pillars.day.branchTenGod, w: 1.5 },    // 일지(배우자궁) 가중치
    { item: pillars.hour.stem, tg: pillars.hour.stemTenGod, w: 1 },
    { item: pillars.hour.branch, tg: pillars.hour.branchTenGod, w: 1 }
  ];

  charEntries.forEach(({ item, tg, w }) => {
    elementCounts[item.element] += w;
    tenGodCounts[tg.group] += w;
    if (item.yinYang === 'yang') yangScore += w;
    else yinScore += w;
  });

  const sortedEl = (Object.entries(elementCounts) as [('wood' | 'fire' | 'earth' | 'metal' | 'water'), number][])
    .sort((a, b) => a[1] - b[1]);
  const weakestElement = sortedEl[0][0];
  const strongestElement = sortedEl[sortedEl.length - 1][0];

  // MBTI 산출
  const activeEnergy = yangScore + elementCounts.fire + elementCounts.wood;
  const calmEnergy = yinScore + elementCounts.water + elementCounts.metal;
  const ei = activeEnergy >= calmEnergy ? 'E' : 'I';

  const intuitionScore = elementCounts.fire * 1.4 + elementCounts.water * 1.4 + (dayMaster.element === 'wood' ? 1.5 : 0);
  const sensingScore = elementCounts.earth * 1.5 + elementCounts.metal * 1.4;
  const ns = intuitionScore >= sensingScore ? 'N' : 'S';

  const thinkingScore = elementCounts.metal * 1.6 + elementCounts.water * 1.2 + (params.gender === 'male' ? 0.3 : 0);
  const feelingScore = elementCounts.wood * 1.4 + elementCounts.fire * 1.5 + (params.gender === 'female' ? 0.3 : 0);
  const tf = thinkingScore > feelingScore ? 'T' : 'F';

  const judgingScore = elementCounts.earth * 1.5 + elementCounts.metal * 1.5;
  const perceivingScore = elementCounts.water * 1.3 + elementCounts.wood * 1.2 + elementCounts.fire * 1.1;
  const jp = judgingScore >= perceivingScore ? 'J' : 'P';

  const mbti = `${ei}${ns}${tf}${jp}`;

  // 6대 삶의 영역 심층 해석 데이터 (오행 + 십성 조화)
  const lifeDomains = [
    {
      id: 'wealth',
      category: '재물운 (財星 · 식상생재)',
      title: '재물 & 자산 증식운',
      score: tenGodCounts['재성(재물·결실)'] >= 2 ? '94점 · 대길' : '86점 · 길운',
      tier: 5 as const,
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=600&q=80',
      shortDesc: `${dayMaster.kor} 일간의 활동력(식상)이 결실(재성)로 이어지는 재물 그릇 분석`,
      harmonyAnalysis: `사주 내 재성(재물·결실) 에너지가 ${tenGodCounts['재성(재물·결실)'].toFixed(1)}포인트, 재물의 원천인 식상(표현·실행)이 ${tenGodCounts['식상(표현·실행)'].toFixed(1)}포인트로 조화를 이루고 있습니다. 단순히 돈을 모으는 것을 넘어 본인의 아이디어와 전문성을 현금화하는 능력이 돋보입니다.`,
      cautionDetail: `지인과의 동업이나 감정적인 충동 투자, 특히 ${ELEMENT_META[weakestElement].label} 기운이 약해지는 시기에는 현금 흐름이 묶일 수 있으니 문서 계약 시 이중 점검이 필수입니다.`,
      boomDetail: `본인의 전문 기술이나 콘텐츠(식상)를 시스템화할 때, 그리고 ${ELEMENT_META[strongestElement].label}의 장점을 살린 장기 자산(우량 자산·문서)으로 옮겨 담을 때 자산이 계단식으로 점프합니다!`,
      tags: ['재성조화', '식상생재', '문서자산', '현금흐름']
    },
    {
      id: 'career',
      category: '직업 및 명예운 (官星 · 관인상생)',
      title: '직업 & 사회적 명예운',
      score: tenGodCounts['관성(직업·명예)'] >= 2 ? '92점 · 대길' : '88점 · 상승',
      tier: 4 as const,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
      shortDesc: `사회궁인 월주(${pillars.month.stem.hanja}${pillars.month.branch.hanja} · ${pillars.month.branchTenGod.name})를 중심으로 본 천직과 승진·명예`,
      harmonyAnalysis: `사주의 기둥 중 사회적 성취를 뜻하는 월주에 [${pillars.month.stem.kor}·${pillars.month.branch.kor}(${pillars.month.branchTenGod.name})]이 자리하고 있습니다. 책임감과 자기 주관이 뚜렷하여 남 밑에 오래 있기보다 자기 분야의 책임자나 리더로 우뚝 서는 관운을 타고났습니다.`,
      cautionDetail: `자존심이 상하거나 부당한 통제를 받을 때 순간적으로 자리를 박차고 나오는 급한 결정을 조심해야 합니다. 구설수를 피하려면 공과 사의 경계를 명확히 하세요.`,
      boomDetail: `자격증, 학위, 혹은 독보적인 실무 포트폴리오(인성)를 결합할 때 '관인상생'의 대운이 터지며 스카우트 제의나 파격적인 직책 상승이 일어납니다!`,
      tags: ['월주사회운', pillars.month.branchTenGod.name, '관인상생', '리더십']
    },
    {
      id: 'expression',
      category: '표현 및 실행운 (食傷 · 재능발현)',
      title: '표현력 & 돌파 실행운',
      score: '91점 · 특급',
      tier: 3 as const,
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80',
      shortDesc: `내면의 재능을 세상 밖으로 펼쳐내는 말솜씨·창의력·추진력(${mbti} 기질 결합)`,
      harmonyAnalysis: `타고난 ${dayMaster.name}의 기질에 ${mbti}의 성향이 더해져, 머릿속에 떠오른 구상을 남다르게 표현하는 매력이 있습니다. 특히 말년과 미래를 뜻하는 시주(${pillars.hour.stem.hanja}${pillars.hour.branch.hanja})의 기운이 살아 있어 나이가 들수록 실행력과 영향력이 더욱 커집니다.`,
      cautionDetail: `의욕이 앞서 한꺼번에 너무 많은 일을 벌이거나(용두사미), 솔직하고 날카로운 언행으로 인해 가까운 사람의 자존심을 건드리는 일을 주의하세요.`,
      boomDetail: `기획안 발표, SNS·미디어 노출, 대중 강연, 혹은 새로운 프로젝트의 첫 삽을 뜨는 역할에서 남들보다 3배 이상 빠른 성과를 낼 수 있습니다!`,
      tags: ['식상발현', '창의돌파', '화술매력', mbti]
    },
    {
      id: 'love',
      category: '애정 및 배우자운 (日支 · 궁합조화)',
      title: '애정 & 배우자 인연운',
      score: '89점 · 호조',
      tier: 2 as const,
      image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80',
      shortDesc: `배우자 자리인 일지(${pillars.day.branch.hanja} ${pillars.day.branch.kor} · ${pillars.day.branchTenGod.name})에 담긴 사랑과 결혼의 모습`,
      harmonyAnalysis: `나를 뜻하는 일간 바로 아래 배우자궁(일지)에 [${pillars.day.branch.kor}(${pillars.day.branch.animal})] 즉 '${pillars.day.branchTenGod.name}'의 기운이 놓여 있습니다. 서로의 성장을 돕고 정신적인 대화가 통하는 상대를 만날 때 애정운이 가장 안정적으로 꽃을 피웁니다.`,
      cautionDetail: `가까운 사이일수록 바라는 기준이 높아져 잔소리가 늘어나거나, 바쁜 사회활동 때문에 연인·배우자와의 정서적 교감을 소홀히 하는 점을 조심해야 합니다.`,
      boomDetail: `나에게 부족한 [${ELEMENT_META[weakestElement].label}] 기운을 가진 차분하고 포용력 있는 상대를 만나거나, 함께 취미·여행을 공유할 때 평생의 든든한 내 편이 됩니다!`,
      tags: [`일지:${pillars.day.branch.kor}`, pillars.day.branchTenGod.name, '인연법', '정서교감']
    },
    {
      id: 'health',
      category: '건강 및 체질운 (五行 균형 · 양생법)',
      title: '선천 체질 & 건강 관리운',
      score: '85점 · 관리',
      tier: 1 as const,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      shortDesc: `가장 강한 ${ELEMENT_META[strongestElement].label}과 보완이 필요한 ${ELEMENT_META[weakestElement].label} 체질 분석`,
      harmonyAnalysis: `사주 오행 중 [${ELEMENT_META[strongestElement].label}] 기운이 가장 강하고, 상대적으로 [${ELEMENT_META[weakestElement].label}] 에너지가 약하게 분포되어 있습니다. 타고난 기초 체력과 회복력은 좋으나 특정 시기에 에너지가 한쪽으로 쏠리면 과로 증상이 나타날 수 있습니다.`,
      cautionDetail: `과도하게 몰입할 때 찾아오는 신경성 피로와 수면 부족, 그리고 ${ELEMENT_META[weakestElement].organ} 계통의 컨디션 저하를 평소 세심하게 살펴야 합니다.`,
      boomDetail: `일상 속에서 ${ELEMENT_META[weakestElement].label} 기운을 보충하는 식습관과 유산소·스트레칭 루틴을 만들면 몸의 오행 순환이 뚫리면서 두뇌 회전과 운기까지 동시에 맑아집니다!`,
      tags: [`강:${ELEMENT_META[strongestElement].hanja}`, `보완:${ELEMENT_META[weakestElement].hanja}`, '오행체질', '활력충전']
    },
    {
      id: 'relationship',
      category: '대인관계 및 귀인운 (印星·比劫 · 천을귀인)',
      title: '대인관계 & 평생 귀인운',
      score: '95점 · 대박',
      tier: 5 as const,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
      shortDesc: `인생의 결정적 순간마다 길을 열어주는 귀인(貴人)과 인맥 네트워크`,
      harmonyAnalysis: `초년과 대외 인상을 뜻하는 연주(${pillars.year.stem.hanja}${pillars.year.branch.hanja})와 인성(학문·귀인) 에너지가 ${tenGodCounts['인성(학문·귀인)'].toFixed(1)}포인트로 작용하여, 위기 때마다 나를 돕는 윗사람이나 조력자가 반드시 나타나는 복 있는 팔자입니다.`,
      cautionDetail: `모두에게 좋은 사람이 되려다 에너지를 뺏기는 '감정 쓰레기통' 역할을 맡거나, 검증되지 않은 사람의 달콤한 제안에 쉽게 정을 주는 것만 경계하세요.`,
      boomDetail: `기존의 좁은 모임을 벗어나 배움·전문가 모임·새로운 커뮤니티로 발을 넓힐 때, 내 인생의 판도를 바꿔줄 핵심 귀인을 만나게 됩니다!`,
      tags: ['천을귀인', '인복충만', '조력자', '네트워크']
    }
  ];

  // 향후 3년 (2026 병오년, 2027 정미년, 2028 무신년) 세운 분석
  const yearsMeta = [
    {
      year: 2026,
      stem: STEMS[2],   // 丙 (병화)
      branch: BRANCHES[6], // 午 (오화)
      ganjiName: '병오년(丙午年 · 붉은 말의 해)',
      ganjiHanja: '丙午',
      theme: '강렬한 태양과 역동적인 불(火)의 에너지가 폭발하며 숨겨진 재능과 인지도가 급상승하는 해'
    },
    {
      year: 2027,
      stem: STEMS[3],   // 丁 (정화)
      branch: BRANCHES[7], // 未 (미토)
      ganjiName: '정미년(丁未年 · 붉은 양의 해)',
      ganjiHanja: '丁未',
      theme: '화(火)의 열기가 토(土)의 결실로 영글며 실속 있는 자산 축적과 내실 다지기가 완성되는 해'
    },
    {
      year: 2028,
      stem: STEMS[4],   // 戊 (무토)
      branch: BRANCHES[8], // 申 (신금)
      ganjiName: '무신년(戊申年 · 황금 원숭이의 해)',
      ganjiHanja: '戊申',
      theme: '거대한 대지(土)에서 단단한 황금(金)을 캐내듯 새로운 무대 확장과 사회적 수확이 일어나는 해'
    }
  ];

  const threeYearFortunes: YearlyDomainFortune[] = yearsMeta.map((ym) => {
    const yearTenGod = getTenGod(dayMaster, ym.stem);
    const branchTenGod = getTenGod(dayMaster, ym.branch);

    return {
      year: ym.year,
      ganjiName: ym.ganjiName,
      ganjiHanja: ym.ganjiHanja,
      yearTheme: ym.theme,
      yearTenGod: `${yearTenGod.name} · ${branchTenGod.name} 운기`,
      domains: {
        wealth: {
          title: '💰 재물운',
          score: ym.year === 2026 ? 88 : ym.year === 2027 ? 93 : 95,
          summary: ym.year === 2026
            ? `${yearTenGod.name}의 영향으로 자금 회전이 빨라지고 새로운 수익 파이프라인이 열리는 시기입니다.`
            : ym.year === 2027
            ? `전년도에 뿌린 씨앗이 알짜배기 현금과 문서(토·미토 창고)로 차곡차곡 쌓이는 알뜰한 증식기입니다.`
            : `신금(申金)의 결실 기운이 강하게 들어와 투자 회수, 인센티브, 사업 매출 확대 등 굵직한 목돈이 들어옵니다.`,
          caution: ym.year === 2026
            ? '분위기에 휩쓸린 과소비나 단기 테마성 투자는 피하고 현금 비중을 30% 이상 유지하세요.'
            : '가까운 지인과의 금전 거래나 보증은 절대 금물이며 계약서 특약 사항을 꼼꼼히 챙기세요.',
          boom: ym.year === 2026
            ? '상반기보다 하반기(음력 7~10월)에 본인의 기획이나 부업·사이드 프로젝트에서 기대 이상의 보너스가 터집니다!'
            : '부동산, 장기 적금, 우량 자산 등 흔들리지 않는 안전 자산으로 갈아탈 때 자산 가치가 크게 뜁니다!'
        },
        career: {
          title: '🏆 직업 및 명예운',
          score: ym.year === 2026 ? 94 : ym.year === 2027 ? 90 : 96,
          summary: ym.year === 2026
            ? `병오년의 환한 불빛이 ${params.name}님의 무대를 비추어 승진, 발탁, 이직, 브랜드 인지도 상승이 두드러집니다.`
            : ym.year === 2027
            ? `조직 내에서 핵심 실무자나 관리자 위치를 확고히 굳히며 전문성을 공인받는 안정 성장기입니다.`
            : `활동 무대가 한 단계 넓어지는 역마(申)의 해로, 새로운 부서·신사업·해외 및 대형 프로젝트에서 주역이 됩니다.`,
          caution: ym.year === 2026
            ? '주목받는 만큼 시기하는 시선이 있을 수 있으니 성과를 낼수록 겸손한 태도로 공을 나누세요.'
            : '기존 방식만 고집하기보다 후배나 동료의 새로운 디지털 툴·트렌드 의견을 수용해야 막힘이 없습니다.',
          boom: ym.year === 2026
            ? '망설이던 이직 지원, 공모전, 승진 심사, 신규 런칭에 과감히 도전하면 단번에 합격·성사될 확률이 매우 높습니다!'
            : '새로운 자격 취득이나 직무 전환, 혹은 더 큰 시장으로의 이동을 결단하면 명예와 연봉이 동시에 점프합니다!'
        },
        expression: {
          title: '🚀 표현 및 실행운',
          score: ym.year === 2026 ? 96 : ym.year === 2027 ? 89 : 92,
          summary: ym.year === 2026
            ? `아이디어와 추진력이 불꽃처럼 피어오르며, 생각만 하던 계획을 행동으로 옮기기에 가장 완벽한 해입니다.`
            : ym.year === 2027
            ? `화려한 외형 확장보다는 디테일을 다듬고 완성도를 100%로 끌어올리는 정교한 실행력이 빛을 발합니다.`
            : `빠른 판단력과 기민한 실행력이 결합되어 경쟁자보다 한발 앞서 시장을 선점하는 힘이 생깁니다.`,
          caution: ym.year === 2026
            ? '마음이 급해져 말실수를 하거나 확인 없이 일을 진행하면 재작업이 생길 수 있으니 출발 전 점검이 필요합니다.'
            : '완벽주의 때문에 시작을 미루기 쉬우니 80%만 준비되어도 먼저 실행에 옮기는 결단력이 중요합니다.',
          boom: ym.year === 2026
            ? '자기PR, 포트폴리오 공개, 유튜브·블로그·SNS 시작, 프레젠테이션에서 사람들의 시선을 단숨에 사로잡습니다!'
            : '기술력과 노하우를 매뉴얼화하거나 상품화해 세상에 내놓으면 폭발적인 반응을 얻게 됩니다!'
        },
        love: {
          title: '💖 애정 및 배우자운',
          score: ym.year === 2026 ? 91 : ym.year === 2027 ? 94 : 88,
          summary: ym.year === 2026
            ? `도화(桃花)와 열정의 기운이 강해져 설레는 첫눈 반함이나 뜨거운 로맨스가 빠르게 시작되는 해입니다.`
            : ym.year === 2027
            ? `설렘이 깊은 신뢰로 무르익어 결혼 약속, 동거, 혹은 부부간의 관계가 한층 단단해지는 결실의 해입니다.`
            : `함께 활동적인 취미나 여행을 즐기며 친구처럼 유쾌하고 산뜻한 에너지를 주고받는 시기입니다.`,
          caution: ym.year === 2026
            ? '감정의 온도가 급격히 올랐다가 사소한 자존심 싸움으로 다툴 수 있으니 한 템포 쉬어가는 대화가 필요합니다.'
            : '익숙함에 속아 상대방의 고마움을 당연하게 여기지 않도록 기념일과 작은 표현을 꼭 챙기세요.',
          boom: ym.year === 2026
            ? '솔로라면 밝고 에너지가 넘치는 모임이나 소개팅에서 이상형을 만나고, 커플은 로맨틱한 여행지에서 사랑이 깊어집니다!'
            : '진지한 미래 계획(결혼·내집마련·자녀계획)을 함께 대화할 때 두 사람의 결속력이 최고조에 달합니다!'
        },
        health: {
          title: '🌿 건강 및 체질운',
          score: ym.year === 2026 ? 84 : ym.year === 2027 ? 88 : 90,
          summary: ym.year === 2026
            ? `열(火) 에너지가 강한 해이므로 활동량은 넘치지만 수분 부족과 열감, 수면의 질 관리에 신경 써야 합니다.`
            : ym.year === 2027
            ? `토(土) 기운이 강해져 소화기(위장)와 체중 관리, 규칙적인 식사 습관이 컨디션을 좌우하는 해입니다.`
            : `호흡기·폐·근골격계를 단련하면 체력이 몰라보게 좋아지고 잔병치레가 사라지는 회복의 해입니다.`,
          caution: ym.year === 2026
            ? '여름철 과로, 카페인 과다 섭취, 눈의 피로와 심혈관 스트레스에 주의하고 충분한 수분을 섭취하세요.'
            : '야식이나 스트레스성 폭식으로 인한 소화불량과 만성 피로를 경계해야 합니다.',
          boom: ym.year === 2026
            ? '물가 산책, 수영, 반신욕, 명상 등 수(水) 기운을 채우는 휴식을 실천하면 피로가 눈 녹듯 사라집니다!'
            : '근력 운동과 아침 가벼운 스트레칭을 시작하면 몸매 라인과 기초 대사량이 눈에 띄게 좋아집니다!'
        },
        relationship: {
          title: '🤝 대인관계 및 귀인운',
          score: ym.year === 2026 ? 93 : ym.year === 2027 ? 91 : 95,
          summary: ym.year === 2026
            ? `주변에 사람들이 구름처럼 모여들고 인기가 높아지며, 나를 무대 위로 끌어올려 줄 귀인이 등장합니다.`
            : ym.year === 2027
            ? `수많은 인맥 중 진짜 내 사람과 스쳐 지나갈 사람이 자연스럽게 걸러지며 알짜배기 인맥이 남는 해입니다.`
            : `타 지역이나 새로운 업계, 혹은 생각지 못한 모임에서 내 인생의 새로운 문을 열어줄 귀인을 만납니다.`,
          caution: ym.year === 2026
            ? '말만 앞세우고 실속이 없는 사람이나 감언이설로 접근하는 인연을 구별하는 안목이 필요합니다.'
            : '오래된 지인과의 사소한 오해는 자존심을 내려놓고 먼저 손 내밀면 오히려 전화위복이 됩니다.',
          boom: ym.year === 2026
            ? `${dayMaster.kor} 일간을 생(生)해주는 선배·멘토·전문가와의 만남에 적극 참석하면 천금 같은 기회를 얻습니다!`
            : '협업 프로젝트나 스터디, 대외 네트워킹 파티에서 평생 함께할 비즈니스 파트너를 만나게 됩니다!'
        }
      }
    };
  });

  return {
    input: params,
    pillars,
    elementCounts,
    tenGodCounts,
    strongestElement,
    weakestElement,
    mbti,
    axesReason: {
      ei: ei === 'E'
        ? '사주에 발산하는 양(陽)과 목·화의 기운이 활발해 사람들과 교류하며 에너지를 얻는 외향형(E) 기질이 강합니다.'
        : '사주에 깊이 있게 수렴하는 음(陰)과 금·수의 기운이 탄탄해 내면의 시간과 집중을 통해 충전하는 내향형(I) 기질이 강합니다.',
      ns: ns === 'N'
        ? '불(火)의 영감과 물(水)의 깊은 사고력이 조화를 이루어 미래 가능성과 큰 그림을 그리는 직관형(N) 성향입니다.'
        : '흙(土)의 안정감과 쇠(金)의 실용성이 돋보여 눈앞의 현실과 실질적인 경험을 중시하는 감각형(S) 성향입니다.',
      tf: tf === 'T'
        ? '금(金)의 결단력과 수(水)의 객관적 지혜가 작용해 원리원칙과 논리적 판단을 우선하는 사고형(T) 팔자입니다.'
        : '목(木)의 따뜻함과 화(火)의 열정이 풍부해 사람의 마음과 관계의 조화를 먼저 살피는 감정형(F) 팔자입니다.',
      jp: jp === 'J'
        ? '토(土)·금(金)의 갈무리 기운이 받쳐주어 계획적이고 체계적으로 일을 매듭짓는 판단형(J) 기질이 나타납니다.'
        : '목(木)·수(水)의 흐르고 뻗어 나가는 기운이 강해 상황에 맞춰 유연하고 자유롭게 대처하는 인식형(P) 기질이 나타납니다.'
    },
    lifeDomains,
    threeYearFortunes
  };
}
