import { TenseInfo } from '../types';

export const TENSES_METADATA: TenseInfo[] = [
  {
    id: 'present_simple',
    nameEn: 'Present Simple',
    nameVi: 'Hiện Tại Đơn',
    category: 'present',
    formula: {
      affirmative: 'S + V(s/es) / be (am/is/are)',
      negative: 'S + do/does + not + V-bare',
      question: 'Do/Does + S + V-bare?',
      whQuestion: 'Wh- + do/does + S + V-bare? (To be: Wh- + am/is/are + S + O/Adj?)',
      whQuestionExample: 'Where do you live? / What does she want? / Why are you late?',
      whSubjectException: 'Who/What + V(s/es) + O? (Ví dụ: Who speaks English here? - không mượn do/does)'
    },
    conceptVi: 'Diễn tả thói quen lặp đi lặp lại, chân lý hiển nhiên, hoặc lịch trình cố định của tàu xe/sự kiện.',
    signalWords: ['always', 'usually', 'often', 'seldom', 'never', 'every day', 'once a week'],
    visualTheme: {
      iconName: 'Repeat',
      colorBg: 'bg-emerald-50',
      colorText: 'text-emerald-700',
      borderColor: 'border-emerald-200'
    },
    coreTip: 'Nhớ thêm s/es với ngôi thứ 3 số ít (He, She, It, danh từ số ít). Chân lý và lịch trình luôn dùng thì này.',
    exampleSentence: 'She usually wakes up early to prepare breakfast.',
    exampleTranslation: 'Cô ấy thường dậy sớm để chuẩn bị bữa sáng.'
  },
  {
    id: 'present_continuous',
    nameEn: 'Present Continuous',
    nameVi: 'Hiện Tại Tiếp Diễn',
    category: 'present',
    formula: {
      affirmative: 'S + am/is/are + V-ing',
      negative: 'S + am/is/are + not + V-ing',
      question: 'Am/Is/Are + S + V-ing?',
      whQuestion: 'Wh- + am/is/are + S + V-ing?',
      whQuestionExample: 'What are you doing right now? / Where is he going?',
      whSubjectException: 'Who/What + is + V-ing + O? (Ví dụ: Who is singing in the shower?)'
    },
    conceptVi: 'Diễn tả hành động đang xảy ra ngay lúc nói, tình huống tạm thời, hoặc thói quen gây phiền toái (với always).',
    signalWords: ['now', 'right now', 'at present', 'Look!', 'Listen!', 'Be quiet!', 'this week'],
    visualTheme: {
      iconName: 'PlayCircle',
      colorBg: 'bg-teal-50',
      colorText: 'text-teal-700',
      borderColor: 'border-teal-200'
    },
    coreTip: 'Các động từ chỉ nhận thức, cảm xúc, sở hữu (understand, know, like, have...) thường KHÔNG chia tiếp diễn.',
    exampleSentence: 'Look! The little boy is climbing up that tall tree.',
    exampleTranslation: 'Nhìn kìa! Cậu bé đang trèo lên cái cây cao kia.'
  },
  {
    id: 'present_perfect',
    nameEn: 'Present Perfect',
    nameVi: 'Hiện Tại Hoàn Thành',
    category: 'present',
    formula: {
      affirmative: 'S + have/has + V3/ed',
      negative: 'S + have/has + not + V3/ed',
      question: 'Have/Has + S + V3/ed?',
      whQuestion: 'Wh- + have/has + S + V3/ed?',
      whQuestionExample: 'Where have you been? / What has she done so far?',
      whSubjectException: 'Who/What + has + V3/ed + O? (Ví dụ: Who has eaten my chocolate cake?)'
    },
    conceptVi: 'Cầu nối giữa Quá khứ và Hiện tại: bắt đầu trong quá khứ kéo dài tới nay, trải nghiệm cuộc đời, hoặc kết quả vừa xong.',
    signalWords: ['already', 'yet', 'just', 'ever', 'never', 'since', 'for', 'so far', 'recently'],
    visualTheme: {
      iconName: 'CheckCircle2',
      colorBg: 'bg-cyan-50',
      colorText: 'text-cyan-700',
      borderColor: 'border-cyan-200'
    },
    coreTip: 'Khác với Quá khứ đơn: Hiện tại hoàn thành KHÔNG đi kèm mốc thời gian quá khứ xác định như yesterday, in 1999.',
    exampleSentence: 'They have lived in this neighborhood for more than fifteen years.',
    exampleTranslation: 'Họ đã sống ở khu phố này hơn mười lăm năm rồi.'
  },
  {
    id: 'present_perfect_continuous',
    nameEn: 'Present Perfect Continuous',
    nameVi: 'Hiện Tại Hoàn Thành Tiếp Diễn',
    category: 'present',
    formula: {
      affirmative: 'S + have/has + been + V-ing',
      negative: 'S + have/has + not + been + V-ing',
      question: 'Have/Has + S + been + V-ing?',
      whQuestion: 'Wh- + have/has + S + been + V-ing?',
      whQuestionExample: 'How long have you been studying English? / What has he been doing all morning?',
      whSubjectException: 'Who/What + has been + V-ing + O? (Ví dụ: Who has been using my computer?)'
    },
    conceptVi: 'Nhấn mạnh tính LIÊN TỤC và ĐỘ DÀI của quá trình từ quá khứ kéo dài không ngắt quãng đến hiện tại và để lại dấu vết.',
    signalWords: ['all day', 'all morning', 'for ... now', 'since', 'How long...?'],
    visualTheme: {
      iconName: 'Clock',
      colorBg: 'bg-sky-50',
      colorText: 'text-sky-700',
      borderColor: 'border-sky-200'
    },
    coreTip: 'Dùng khi muốn trả lời "Tại sao mệt/ướt/nóng?": "Because I have been running/exercising!"',
    exampleSentence: 'It has been raining continuously all morning, causing severe flooding.',
    exampleTranslation: 'Trời đã mưa tầm tã suốt cả buổi sáng, gây ra ngập lụt nghiêm trọng.'
  },
  {
    id: 'past_simple',
    nameEn: 'Past Simple',
    nameVi: 'Quá Khứ Đơn',
    category: 'past',
    formula: {
      affirmative: 'S + V2/ed / was/were',
      negative: 'S + did + not + V-bare',
      question: 'Did + S + V-bare?',
      whQuestion: 'Wh- + did + S + V-bare? (To be: Wh- + was/were + S + O/Adj?)',
      whQuestionExample: 'Where did you go yesterday? / Why did he leave? / Who was that woman?',
      whSubjectException: 'Who/What + V2/ed + O? (Ví dụ: Who broke the window? — Tuyệt đối KHÔNG mượn trợ từ did!)'
    },
    conceptVi: 'Hành động đã xảy ra và CHẤM DỨT HOÀN TOÀN trong quá khứ, có thời gian xác định rõ ràng.',
    signalWords: ['yesterday', 'ago', 'last week', 'in 1928', 'when I was young'],
    visualTheme: {
      iconName: 'History',
      colorBg: 'bg-amber-50',
      colorText: 'text-amber-800',
      borderColor: 'border-amber-200'
    },
    coreTip: 'Khi mượn trợ động từ did/didn\'t trong câu hỏi và phủ định, động từ chính luôn ở dạng nguyên thể (V-bare).',
    exampleSentence: 'The board of directors approved the budget yesterday afternoon.',
    exampleTranslation: 'Hội đồng quản trị đã phê duyệt ngân sách chiều hôm qua.'
  },
  {
    id: 'past_continuous',
    nameEn: 'Past Continuous',
    nameVi: 'Quá Khứ Tiếp Diễn',
    category: 'past',
    formula: {
      affirmative: 'S + was/were + V-ing',
      negative: 'S + was/were + not + V-ing',
      question: 'Was/Were + S + V-ing?',
      whQuestion: 'Wh- + was/were + S + V-ing?',
      whQuestionExample: 'What were you doing at 8 PM yesterday? / Why was she crying when I saw her?',
      whSubjectException: 'Who/What + was + V-ing + O? (Ví dụ: Who was driving the car when the crash occurred?)'
    },
    conceptVi: 'Hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ, hoặc đang diễn ra thì có hành động khác xen vào.',
    signalWords: ['at 8 p.m. last night', 'at this exact time yesterday', 'while', 'when'],
    visualTheme: {
      iconName: 'Timer',
      colorBg: 'bg-orange-50',
      colorText: 'text-orange-800',
      borderColor: 'border-orange-200'
    },
    coreTip: 'Hành động dài đang xảy ra dùng Quá khứ tiếp diễn (was/were V-ing), hành động ngắn cắt ngang dùng Quá khứ đơn (V2/ed).',
    exampleSentence: 'When the power went out, we were watching an interesting documentary.',
    exampleTranslation: 'Khi mất điện, chúng tôi đang xem một bộ phim tài liệu rất thú vị.'
  },
  {
    id: 'past_perfect',
    nameEn: 'Past Perfect',
    nameVi: 'Quá Khứ Hoàn Thành',
    category: 'past',
    formula: {
      affirmative: 'S + had + V3/ed',
      negative: 'S + had + not + V3/ed',
      question: 'Had + S + V3/ed?',
      whQuestion: 'Wh- + had + S + V3/ed?',
      whQuestionExample: 'What had you done before they arrived? / Why had he left so early?',
      whSubjectException: 'Who/What + had + V3/ed + O? (Ví dụ: Who had finished the task before the deadline?)'
    },
    conceptVi: 'Xảy ra và HOÀN TẤT TRƯỚC một mốc hoặc một hành động khác trong quá khứ ("quá khứ của quá khứ").',
    signalWords: ['by the time', 'before', 'after', 'prior to', 'as soon as'],
    visualTheme: {
      iconName: 'CheckCheck',
      colorBg: 'bg-rose-50',
      colorText: 'text-rose-800',
      borderColor: 'border-rose-200'
    },
    coreTip: 'Quy tắc vàng: Hành động nào xảy ra TRƯỚC chia Had + V3, hành động xảy ra SAU chia Quá khứ đơn.',
    exampleSentence: 'By the time the police arrived, the burglar had escaped through the rear window.',
    exampleTranslation: 'Trước khi cảnh sát đến nơi, tên trộm đã trốn thoát qua cửa sổ phía sau.'
  },
  {
    id: 'past_perfect_continuous',
    nameEn: 'Past Perfect Continuous',
    nameVi: 'Quá Khứ Hoàn Thành Tiếp Diễn',
    category: 'past',
    formula: {
      affirmative: 'S + had + been + V-ing',
      negative: 'S + had + not + been + V-ing',
      question: 'Had + S + been + V-ing?',
      whQuestion: 'Wh- + had + S + been + V-ing?',
      whQuestionExample: 'How long had you been waiting before the train arrived? / Why had they been arguing for hours?',
      whSubjectException: 'Who/What + had been + V-ing + O? (Ví dụ: Who had been leading the team before Mark joined?)'
    },
    conceptVi: 'Nhấn mạnh quá trình diễn ra LIÊN TỤC suốt một khoảng thời gian trước khi một hành động quá khứ khác xảy đến.',
    signalWords: ['for ... before', 'prior to his promotion', 'because she had been ... for hours'],
    visualTheme: {
      iconName: 'Hourglass',
      colorBg: 'bg-red-50',
      colorText: 'text-red-800',
      borderColor: 'border-red-200'
    },
    coreTip: 'Dùng để giải thích nguyên nhân kèm khoảng thời gian kéo dài dẫn đến kết quả trong quá khứ (ví dụ: mệt mỏi, mắt đỏ).',
    exampleSentence: 'They had been negotiating for six hours before they finally reached a consensus.',
    exampleTranslation: 'Họ đã đàm phán liên tục suốt sáu giờ đồng hồ trước khi cuối cùng đạt được sự đồng thuận.'
  },
  {
    id: 'future_simple',
    nameEn: 'Future Simple',
    nameVi: 'Tương Lai Đơn',
    category: 'future',
    formula: {
      affirmative: 'S + will + V-bare',
      negative: 'S + will + not (won\'t) + V-bare',
      question: 'Will + S + V-bare?',
      whQuestion: 'Wh- + will + S + V-bare?',
      whQuestionExample: 'What will you do tomorrow? / Where will they stay?',
      whSubjectException: 'Who/What + will + V-bare + O? (Ví dụ: Who will help you with the report?)'
    },
    conceptVi: 'Quyết định bộc phát ngay lúc nói, lời hứa, lời đề nghị giúp đỡ, hoặc dự đoán chủ quan (I think / perhaps).',
    signalWords: ['tomorrow', 'next year', 'I promise', 'I think', 'perhaps', 'in the future'],
    visualTheme: {
      iconName: 'Sparkles',
      colorBg: 'bg-indigo-50',
      colorText: 'text-indigo-800',
      borderColor: 'border-indigo-200'
    },
    coreTip: 'Không dùng "will" cho kế hoạch đã chuẩn bị kỹ từ trước (dùng be going to) hoặc lịch trình tàu xe (dùng hiện tại đơn).',
    exampleSentence: 'Don\'t worry about the heavy luggage; I will carry it upstairs for you.',
    exampleTranslation: 'Đừng lo về đống hành lý nặng đó; tôi sẽ xách nó lên tầng giúp bạn.'
  },
  {
    id: 'near_future',
    nameEn: 'Near Future (Be Going To)',
    nameVi: 'Tương Lai Gần',
    category: 'future',
    formula: {
      affirmative: 'S + am/is/are + going to + V-bare',
      negative: 'S + am/is/are + not + going to + V-bare',
      question: 'Am/Is/Are + S + going to + V-bare?',
      whQuestion: 'Wh- + am/is/are + S + going to + V-bare?',
      whQuestionExample: 'What are you going to do this weekend? / Where is she going to study?',
      whSubjectException: 'Who/What + is going to + V-bare + O? (Ví dụ: Who is going to drive tonight?)'
    },
    conceptVi: 'Dự định, kế hoạch đã có từ trước hoặc dự đoán có BẰNG CHỨNG rõ ràng ở hiện tại (mây đen -> trời sắp mưa).',
    signalWords: ['Look at...', 'Watch out!', 'plan to', 'saved enough money'],
    visualTheme: {
      iconName: 'ArrowRightCircle',
      colorBg: 'bg-blue-50',
      colorText: 'text-blue-800',
      borderColor: 'border-blue-200'
    },
    coreTip: 'Có bằng chứng trước mắt (mây đen, thang rung lắc) -> CHẮC CHẮN dùng "be going to", không dùng "will".',
    exampleSentence: 'Look at those dark clouds! It is going to rain heavily very soon.',
    exampleTranslation: 'Nhìn những đám mây đen kịt kia kìa! Trời sắp sửa mưa rất to đấy.'
  },
  {
    id: 'future_continuous',
    nameEn: 'Future Continuous',
    nameVi: 'Tương Lai Tiếp Diễn',
    category: 'future',
    formula: {
      affirmative: 'S + will be + V-ing',
      negative: 'S + will not be + V-ing',
      question: 'Will + S + be + V-ing?',
      whQuestion: 'Wh- + will + S + be + V-ing?',
      whQuestionExample: 'What will you be doing at this time tomorrow? / Where will they be staying during the conference?',
      whSubjectException: 'Who/What + will be + V-ing + O? (Ví dụ: Who will be giving the keynote speech?)'
    },
    conceptVi: 'Hành động đang diễn ra tại một thời điểm hoặc khoảng thời gian xác định cụ thể trong tương lai.',
    signalWords: ['at 10 a.m. tomorrow', 'this time next week', 'throughout the upcoming month'],
    visualTheme: {
      iconName: 'CalendarClock',
      colorBg: 'bg-violet-50',
      colorText: 'text-violet-800',
      borderColor: 'border-violet-200'
    },
    coreTip: 'Công thức luôn là: will + be + V-ing (giữ nguyên "be", không chia am/is/are).',
    exampleSentence: 'At 10 a.m. tomorrow, we will be attending the international trade symposium.',
    exampleTranslation: 'Vào lúc 10 giờ sáng mai, chúng tôi sẽ đang tham dự hội nghị chuyên đề thương mại quốc tế.'
  },
  {
    id: 'future_perfect',
    nameEn: 'Future Perfect',
    nameVi: 'Tương Lai Hoàn Thành',
    category: 'future',
    formula: {
      affirmative: 'S + will have + V3/ed',
      negative: 'S + will not have + V3/ed',
      question: 'Will + S + have + V3/ed?',
      whQuestion: 'Wh- + will + S + have + V3/ed?',
      whQuestionExample: 'What will you have achieved by next year? / How many books will she have read by the end of this month?',
      whSubjectException: 'Who/What + will have + V3/ed + O? (Ví dụ: Who will have finished their presentation by noon?)'
    },
    conceptVi: 'Hành động sẽ HOÀN TẤT TRƯỚC một mốc thời gian hoặc trước một hành động khác trong tương lai.',
    signalWords: ['by the end of this year', 'by 2030', 'before she turns thirty', 'by tomorrow morning'],
    visualTheme: {
      iconName: 'Trophy',
      colorBg: 'bg-purple-50',
      colorText: 'text-purple-800',
      borderColor: 'border-purple-200'
    },
    coreTip: 'Dấu hiệu nhận biết số một là "By + mốc tương lai" (ví dụ: By next Friday, By 2030) -> chọn ngay will have + V3.',
    exampleSentence: 'By the end of this year, he will have completed his doctoral dissertation.',
    exampleTranslation: 'Tính đến cuối năm nay, anh ấy sẽ hoàn thành xong luận án tiến sĩ của mình.'
  },
  {
    id: 'future_perfect_continuous',
    nameEn: 'Future Perfect Continuous',
    nameVi: 'Tương Lai Hoàn Thành Tiếp Diễn',
    category: 'future',
    formula: {
      affirmative: 'S + will have been + V-ing',
      negative: 'S + will not have been + V-ing',
      question: 'Will + S + have been + V-ing?',
      whQuestion: 'Wh- + will + S + have been + V-ing?',
      whQuestionExample: 'How long will you have been living here by 2026? / What will she have been researching for 3 years?',
      whSubjectException: 'Who/What + will have been + V-ing + O? (Ví dụ: Who will have been working with us the longest?)'
    },
    conceptVi: 'Nhấn mạnh tính LIÊN TỤC của một hành động tính tới một mốc thời điểm cụ thể trong tương lai.',
    signalWords: ['By next November ... for thirty years', 'for ten straight hours by 10 p.m.'],
    visualTheme: {
      iconName: 'TrendingUp',
      colorBg: 'bg-fuchsia-50',
      colorText: 'text-fuchsia-800',
      borderColor: 'border-fuchsia-200'
    },
    coreTip: 'Có cả "By + mốc tương lai" và "for + khoảng thời gian liên tục" -> will have been + V-ing.',
    exampleSentence: 'By next November, Mr. Davis will have been teaching at this prestigious academy for thirty years.',
    exampleTranslation: 'Tính đến tháng 11 tới, thầy Davis sẽ giảng dạy tại học viện danh giá này tròn 30 năm.'
  }
];
