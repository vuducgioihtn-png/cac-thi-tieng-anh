export interface WhTenseItem {
  id: string;
  tenseNameVi: string;
  tenseNameEn: string;
  category: 'simple' | 'continuous' | 'perfect' | 'perfect_continuous' | 'future_in_past';
  categoryLabelVi: string;
  colorTheme: {
    bg: string;
    border: string;
    text: string;
    badge: string;
  };
  formulas: {
    label: string;
    formula: string;
    exampleEn: string;
    exampleVi: string;
    notes?: string;
  }[];
  subjectQuestion?: {
    formula: string;
    exampleEn: string;
    exampleVi: string;
    wrongExampleEn: string;
    ruleVi: string;
  };
  keySignals?: string[];
}

export const WH_GENERAL_PRINCIPLES = {
  title: "Nguyên Tắc Chung Đặt Câu Hỏi Wh-",
  generalFormula: "Wh- + Trợ động từ / To be / Modal verb + S + Động từ chính?",
  explanationVi: "Hầu hết các câu hỏi Wh- trong tiếng Anh đều tuân thủ quy tắc đảo Trợ động từ (Auxiliary verb) hoặc To be lên TRƯỚC Chủ ngữ (S), theo sau là Động từ chính (Main verb).",
  subjectException: {
    title: "Ngoại lệ cốt lõi: Subject Questions (Hỏi cho Chủ ngữ)",
    ruleVi: "Khi từ để hỏi (Who / What / Which) đóng vai trò là CHỦ NGỮ của câu (hỏi xem AI hoặc CÁI GÌ thực hiện hành động), ta KHÔNG mượn trợ động từ (do/does/did), mà chia động từ trực tiếp như một câu khẳng định thông thường.",
    formula: "Who / What + V (chia theo ngôi số ít / thời của câu) + O?",
    comparison: [
      {
        type: "Subject Question (Hỏi ai thực hiện hành động)",
        enCorrect: "Who broke the window?",
        enWrong: "Who did break the window?",
        vi: "Ai đã làm vỡ cửa sổ? (Who là chủ ngữ làm vỡ)"
      },
      {
        type: "Object Question (Hỏi đối tượng bị tác động)",
        enCorrect: "Who did you invite to the party?",
        enWrong: "Who you invited?",
        vi: "Bạn đã mời ai đến bữa tiệc? (You là chủ ngữ, Who là tân ngữ được mời)"
      },
      {
        type: "Subject Question (Hỏi sự việc xảy ra)",
        enCorrect: "What happened last night?",
        enWrong: "What did happen last night?",
        vi: "Chuyện gì đã xảy ra tối qua? (What là chủ ngữ)"
      },
      {
        type: "Object Question (Hỏi hành động của người)",
        enCorrect: "What did you do last night?",
        enWrong: "What you did last night?",
        vi: "Bạn đã làm gì tối qua? (You là chủ ngữ)"
      }
    ]
  }
};

export const WH_14_TENSES_DATA: WhTenseItem[] = [
  // 1. NHÓM THÌ ĐƠN (SIMPLE TENSES)
  {
    id: 'present_simple',
    tenseNameVi: 'Hiện Tại Đơn',
    tenseNameEn: 'Present Simple',
    category: 'simple',
    categoryLabelVi: 'Nhóm Thì Đơn (Simple Tenses)',
    colorTheme: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      badge: 'bg-emerald-100 text-emerald-800'
    },
    formulas: [
      {
        label: 'Động từ thường (Action Verbs)',
        formula: 'Wh- + do / does + S + V_bare?',
        exampleEn: 'Where do you live? / What does she want for lunch?',
        exampleVi: 'Bạn sống ở đâu? / Cô ấy muốn ăn gì cho bữa trưa?',
        notes: 'Dùng "do" cho I/We/You/They/N nhiều; dùng "does" cho He/She/It/N ít. Động từ chính trả về nguyên thể (V_bare).'
      },
      {
        label: 'Động từ "To be" (Am / Is / Are)',
        formula: 'Wh- + am / is / are + S + (Adj / N / Prep)?',
        exampleEn: 'Why are you late? / Who is your teacher?',
        exampleVi: 'Tại sao bạn lại đến muộn? / Ai là giáo viên của bạn?',
        notes: 'Không mượn trợ động từ do/does khi động từ chính là To be.'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + V(s/es) + O?',
      exampleEn: 'Who teaches you English?',
      exampleVi: 'Ai dạy bạn tiếng Anh?',
      wrongExampleEn: 'Who does teach you English? (Sai)',
      ruleVi: 'Who đóng vai trò chủ ngữ nên chia động từ trực tiếp dạng V(s/es).'
    },
    keySignals: ['Where', 'What', 'Why', 'When', 'How often']
  },
  {
    id: 'past_simple',
    tenseNameVi: 'Quá Khứ Đơn',
    tenseNameEn: 'Past Simple',
    category: 'simple',
    categoryLabelVi: 'Nhóm Thì Đơn (Simple Tenses)',
    colorTheme: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
      badge: 'bg-amber-100 text-amber-800'
    },
    formulas: [
      {
        label: 'Động từ thường (Action Verbs)',
        formula: 'Wh- + did + S + V_bare?',
        exampleEn: 'Where did you go yesterday? / Why did he leave so early?',
        exampleVi: 'Hôm qua bạn đã đi đâu? / Tại sao anh ấy lại rời đi sớm thế?',
        notes: 'Dùng chung "did" cho mọi chủ ngữ. Động từ chính lùi về nguyên thể (V_bare).'
      },
      {
        label: 'Động từ "To be" (Was / Were)',
        formula: 'Wh- + was / were + S + (Adj / N / Prep)?',
        exampleEn: 'Who was that woman? / Where were they last night?',
        exampleVi: 'Người phụ nữ đó là ai vậy? / Họ đã ở đâu vào tối qua?',
        notes: 'Was đi với I/He/She/It/N ít; Were đi với You/We/They/N nhiều.'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + V2/ed + O?',
      exampleEn: 'Who invented the telephone?',
      exampleVi: 'Ai đã phát minh ra điện thoại?',
      wrongExampleEn: 'Who did invent the telephone? (Sai)',
      ruleVi: 'Hỏi ai thực hiện hành động trong quá khứ: chia trực tiếp V2/ed, không dùng trợ động từ "did".'
    },
    keySignals: ['yesterday', 'ago', 'last night', 'in 2020']
  },
  {
    id: 'future_simple',
    tenseNameVi: 'Tương Lai Đơn',
    tenseNameEn: 'Future Simple',
    category: 'simple',
    categoryLabelVi: 'Nhóm Thì Đơn (Simple Tenses)',
    colorTheme: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-900',
      badge: 'bg-indigo-100 text-indigo-800'
    },
    formulas: [
      {
        label: 'Cấu trúc trợ động từ "Will"',
        formula: 'Wh- + will + S + V_bare?',
        exampleEn: 'What will you do tomorrow? / Where will they stay in Da Nang?',
        exampleVi: 'Ngày mai bạn sẽ làm gì? / Họ sẽ ở đâu tại Đà Nẵng?',
        notes: 'Will dùng chung cho tất cả các ngôi chủ ngữ. Động từ chính luôn nguyên thể (V_bare).'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + will + V_bare + O?',
      exampleEn: 'Who will help me carry these heavy boxes?',
      exampleVi: 'Ai sẽ giúp tôi khiêng những thùng hàng nặng này?',
      wrongExampleEn: 'Không có biến thể sai trợ từ vì will là khiếm khuyết đi kèm.',
      ruleVi: 'Who/What thay thế cho chủ ngữ trực tiếp.'
    },
    keySignals: ['tomorrow', 'next week', 'soon']
  },
  {
    id: 'near_future',
    tenseNameVi: 'Tương Lai Gần (Be Going To)',
    tenseNameEn: 'Near Future',
    category: 'simple',
    categoryLabelVi: 'Nhóm Thì Đơn (Simple Tenses)',
    colorTheme: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      badge: 'bg-blue-100 text-blue-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "am / is / are + going to"',
        formula: 'Wh- + am / is / are + S + going to + V_bare?',
        exampleEn: 'What are you going to do this weekend? / Where is she going to study abroad?',
        exampleVi: 'Bạn dự định làm gì cuối tuần này? / Cô ấy sắp du học ở đâu?',
        notes: 'Chia To be theo chủ ngữ S: I ➔ am | He/She/It/N ít ➔ is | We/You/They/N nhiều ➔ are.'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + is going to + V_bare + O?',
      exampleEn: 'Who is going to attend the upcoming seminar?',
      exampleVi: 'Ai sắp tham dự buổi hội thảo sắp tới?',
      wrongExampleEn: 'Who are going to attend (trừ khi biết rõ người hỏi là số nhiều)',
      ruleVi: 'Khi hỏi Who làm chủ ngữ chưa rõ số lượng, To be mặc định chia ở ngôi thứ 3 số ít: "is going to".'
    },
    keySignals: ['this weekend', 'tonight', 'planned']
  },

  // 2. NHÓM THÌ TIẾP DIỄN (CONTINUOUS TENSES)
  {
    id: 'present_continuous',
    tenseNameVi: 'Hiện Tại Tiếp Diễn',
    tenseNameEn: 'Present Continuous',
    category: 'continuous',
    categoryLabelVi: 'Nhóm Thì Tiếp Diễn (Continuous Tenses)',
    colorTheme: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-900',
      badge: 'bg-teal-100 text-teal-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "am / is / are + V-ing"',
        formula: 'Wh- + am / is / are + S + V-ing?',
        exampleEn: 'What are you doing right now? / Where is he going at this late hour?',
        exampleVi: 'Bạn đang làm gì lúc này thế? / Anh ấy đang đi đâu vào giờ khuya này?',
        notes: 'Động từ chính luôn ở dạng đuôi -ing. Đảo To be ra trước chủ ngữ S.'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + is + V-ing + O?',
      exampleEn: 'Who is singing in the shower right now?',
      exampleVi: 'Ai đang hát trong phòng tắm lúc này thế?',
      wrongExampleEn: 'Who does singing (Sai hoàn toàn)',
      ruleVi: 'Who là chủ ngữ: chia To be số ít "is + V-ing".'
    },
    keySignals: ['now', 'right now', 'at the moment']
  },
  {
    id: 'past_continuous',
    tenseNameVi: 'Quá Khứ Tiếp Diễn',
    tenseNameEn: 'Past Continuous',
    category: 'continuous',
    categoryLabelVi: 'Nhóm Thì Tiếp Diễn (Continuous Tenses)',
    colorTheme: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-900',
      badge: 'bg-orange-100 text-orange-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "was / were + V-ing"',
        formula: 'Wh- + was / were + S + V-ing?',
        exampleEn: 'What were you doing at 8 PM yesterday? / Why was she crying when I saw her?',
        exampleVi: 'Bạn đang làm gì vào lúc 8 giờ tối hôm qua? / Tại sao cô ấy lại đang khóc lúc tôi gặp cô ấy?',
        notes: 'Hỏi về một hành động ĐANG DIỄN RA tại thời điểm xác định trong quá khứ.'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + was + V-ing + O?',
      exampleEn: 'Who was making that terrible noise last night?',
      exampleVi: 'Ai đang gây ra tiếng ồn kinh khủng đó đêm qua thế?',
      wrongExampleEn: 'Who did make noise at 10 PM (Sai thì tiếp diễn)',
      ruleVi: 'Who hỏi chủ ngữ: dùng "was + V-ing".'
    },
    keySignals: ['at 8 PM yesterday', 'when I saw her', 'while']
  },
  {
    id: 'future_continuous',
    tenseNameVi: 'Tương Lai Tiếp Diễn',
    tenseNameEn: 'Future Continuous',
    category: 'continuous',
    categoryLabelVi: 'Nhóm Thì Tiếp Diễn (Continuous Tenses)',
    colorTheme: {
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      text: 'text-violet-900',
      badge: 'bg-violet-100 text-violet-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "will + S + be + V-ing"',
        formula: 'Wh- + will + S + be + V-ing?',
        exampleEn: 'What will you be doing at this time tomorrow? / Where will they be staying during the conference?',
        exampleVi: 'Vào giờ này ngày mai bạn sẽ đang làm gì? / Họ sẽ đang ở đâu trong suốt thời gian diễn ra hội nghị?',
        notes: 'Lưu ý trật tự từ: Wh- + WILL + S + BE + V-ING? (Trợ động từ "will" đảo lên trước S, "be" đứng sau S).'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + will be + V-ing + O?',
      exampleEn: 'Who will be leading the presentation at 10 AM tomorrow?',
      exampleVi: 'Ai sẽ đang chủ trì buổi thuyết trình lúc 10 giờ sáng mai?',
      wrongExampleEn: 'Who will lead (Chỉ là thì tương lai đơn, không nhấn mạnh đang diễn ra)',
      ruleVi: 'Giữ nguyên trật tự "will be + V-ing" khi Who/What là chủ ngữ.'
    },
    keySignals: ['at this time tomorrow', 'this time next week']
  },

  // 3. NHÓM THÌ HOÀN THÀNH (PERFECT TENSES)
  {
    id: 'present_perfect',
    tenseNameVi: 'Hiện Tại Hoàn Thành',
    tenseNameEn: 'Present Perfect',
    category: 'perfect',
    categoryLabelVi: 'Nhóm Thì Hoàn Thành (Perfect Tenses)',
    colorTheme: {
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-cyan-900',
      badge: 'bg-cyan-100 text-cyan-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "have / has + V3/ed"',
        formula: 'Wh- + have / has + S + V3/ed?',
        exampleEn: 'Where have you been? / What has she done so far?',
        exampleVi: 'Bạn vừa ở đâu về thế? / Cho đến nay cô ấy đã làm được những gì rồi?',
        notes: 'Dùng "have" cho I/We/You/They/N nhiều; dùng "has" cho He/She/It/N ít. Động từ chính ở dạng quá khứ phân từ (V3/ed).'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + has + V3/ed + O?',
      exampleEn: 'Who has eaten my chocolate cake?',
      exampleVi: 'Ai đã ăn chiếc bánh sô-cô-la của tôi rồi?',
      wrongExampleEn: 'Who did eat my cake? (Mất nghĩa vừa mới xảy ra để lại hậu quả)',
      ruleVi: 'Who là chủ ngữ ẩn: mặc định chia trợ động từ số ít "has + V3/ed".'
    },
    keySignals: ['so far', 'recently', 'ever', 'How many times']
  },
  {
    id: 'past_perfect',
    tenseNameVi: 'Quá Khứ Hoàn Thành',
    tenseNameEn: 'Past Perfect',
    category: 'perfect',
    categoryLabelVi: 'Nhóm Thì Hoàn Thành (Perfect Tenses)',
    colorTheme: {
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      text: 'text-rose-900',
      badge: 'bg-rose-100 text-rose-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "had + V3/ed"',
        formula: 'Wh- + had + S + V3/ed?',
        exampleEn: 'What had you done before they arrived? / Why had he left so early before the meeting started?',
        exampleVi: 'Bạn đã làm xong những gì trước khi họ đến? / Tại sao anh ấy lại rời đi sớm thế trước khi cuộc họp bắt đầu?',
        notes: 'Dùng "had" cho tất cả mọi ngôi chủ ngữ. Hỏi về hành động xảy ra và kết thúc TRƯỚC một thời điểm quá khứ.'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + had + V3/ed + O?',
      exampleEn: 'Who had finished the assignment before the teacher asked?',
      exampleVi: 'Ai đã hoàn thành xong bài tập trước khi giáo viên yêu cầu?',
      wrongExampleEn: 'Who did finish before... (Sai mốc thời gian)',
      ruleVi: 'Who/What làm chủ ngữ: ghép trực tiếp "had + V3/ed".'
    },
    keySignals: ['before', 'by the time', 'prior to']
  },
  {
    id: 'future_perfect',
    tenseNameVi: 'Tương Lai Hoàn Thành',
    tenseNameEn: 'Future Perfect',
    category: 'perfect',
    categoryLabelVi: 'Nhóm Thì Hoàn Thành (Perfect Tenses)',
    colorTheme: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-900',
      badge: 'bg-purple-100 text-purple-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "will + S + have + V3/ed"',
        formula: 'Wh- + will + S + have + V3/ed?',
        exampleEn: 'What will you have achieved by next year? / How many books will she have read by the end of this month?',
        exampleVi: 'Bạn sẽ đạt được những thành tựu gì tính đến năm sau? / Cô ấy sẽ đọc xong bao nhiêu cuốn sách trước cuối tháng này?',
        notes: 'Lưu ý trật tự từ: Wh- + WILL + S + HAVE + V3/ed? (Không đổi "have" thành "has" dù chủ ngữ là he/she/it!).'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + will have + V3/ed + O?',
      exampleEn: 'Who will have submitted the final report by 5 PM today?',
      exampleVi: 'Ai sẽ nộp xong báo cáo cuối cùng trước 5 giờ chiều hôm nay?',
      wrongExampleEn: 'Who will has submitted (Sai ngữ pháp, luôn là will have)',
      ruleVi: 'Trật tự "will have + V3/ed" giữ nguyên khi hỏi chủ ngữ Who/What.'
    },
    keySignals: ['by next year', 'by the end of this month', 'before 2030']
  },

  // 4. NHÓM THÌ HOÀN THÀNH TIẾP DIỄN (PERFECT CONTINUOUS TENSES)
  {
    id: 'present_perfect_continuous',
    tenseNameVi: 'Hiện Tại Hoàn Thành Tiếp Diễn',
    tenseNameEn: 'Present Perfect Continuous',
    category: 'perfect_continuous',
    categoryLabelVi: 'Nhóm Hoàn Thành Tiếp Diễn',
    colorTheme: {
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-900',
      badge: 'bg-sky-100 text-sky-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "have / has + S + been + V-ing"',
        formula: 'Wh- + have / has + S + been + V-ing?',
        exampleEn: 'How long have you been studying English? / What has he been doing all morning?',
        exampleVi: 'Bạn đã học tiếng Anh được bao lâu rồi? / Cả buổi sáng nay anh ấy đã làm cái gì thế?',
        notes: 'Trật tự chuẩn: Wh- + HAVE/HAS + S + BEEN + V-ING? Dùng để hỏi về độ dài thời gian liên tục hoặc nguyên nhân hành động kéo dài đến nay.'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + has been + V-ing + O?',
      exampleEn: 'Who has been using my computer without permission?',
      exampleVi: 'Ai đã và đang tự ý dùng máy tính của tôi suốt từ nãy đến giờ thế?',
      wrongExampleEn: 'Who have been using (Mặc định số ít là has)',
      ruleVi: 'Who là chủ ngữ: dùng "has been + V-ing".'
    },
    keySignals: ['How long', 'all morning', 'since morning']
  },
  {
    id: 'past_perfect_continuous',
    tenseNameVi: 'Quá Khứ Hoàn Thành Tiếp Diễn',
    tenseNameEn: 'Past Perfect Continuous',
    category: 'perfect_continuous',
    categoryLabelVi: 'Nhóm Hoàn Thành Tiếp Diễn',
    colorTheme: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-900',
      badge: 'bg-red-100 text-red-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "had + S + been + V-ing"',
        formula: 'Wh- + had + S + been + V-ing?',
        exampleEn: 'How long had you been waiting before the train arrived? / Why had they been arguing for hours before we showed up?',
        exampleVi: 'Bạn đã phải chờ bao lâu trước khi tàu đến? / Tại sao họ lại cãi nhau suốt mấy tiếng trước khi chúng tôi xuất hiện?',
        notes: 'Hỏi về tiến trình liên tục kéo dài suốt một khoảng thời gian TRƯỚC một sự kiện quá khứ khác.'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + had been + V-ing + O?',
      exampleEn: 'Who had been working on the project before Peter took over?',
      exampleVi: 'Ai đã phụ trách dự án này liên tục trước khi Peter tiếp quản?',
      wrongExampleEn: 'Who was working before... (Không làm nổi bật tính liên tục trước đó)',
      ruleVi: 'Who/What làm chủ ngữ: ghép trực tiếp "had been + V-ing".'
    },
    keySignals: ['How long ... before', 'prior to']
  },
  {
    id: 'future_perfect_continuous',
    tenseNameVi: 'Tương Lai Hoàn Thành Tiếp Diễn',
    tenseNameEn: 'Future Perfect Continuous',
    category: 'perfect_continuous',
    categoryLabelVi: 'Nhóm Hoàn Thành Tiếp Diễn',
    colorTheme: {
      bg: 'bg-fuchsia-50',
      border: 'border-fuchsia-200',
      text: 'text-fuchsia-900',
      badge: 'bg-fuchsia-100 text-fuchsia-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "will + S + have been + V-ing"',
        formula: 'Wh- + will + S + have been + V-ing?',
        exampleEn: 'How long will you have been living here by 2026? / What will she have been researching for 3 years by the time she graduates?',
        exampleVi: 'Tính đến năm 2026 bạn sẽ sống ở đây được bao lâu rồi? / Cô ấy sẽ nghiên cứu về đề tài gì tròn 3 năm trước lúc tốt nghiệp?',
        notes: 'Trật tự: Wh- + WILL + S + HAVE BEEN + V-ING? (Trợ từ "will" đứng trước S, còn "have been + V-ing" giữ nguyên sau S).'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + will have been + V-ing + O?',
      exampleEn: 'Who will have been teaching here the longest by next December?',
      exampleVi: 'Ai sẽ là người giảng dạy ở đây lâu nhất tính đến tháng 12 năm sau?',
      wrongExampleEn: 'Who will has been teaching (Sai)',
      ruleVi: 'Who làm chủ ngữ: giữ nguyên cụm "will have been + V-ing".'
    },
    keySignals: ['How long ... by', 'by 2026']
  },

  // 5. NHÓM TƯƠNG LAI TRONG QUÁ KHỨ (FUTURE IN THE PAST - 2 THÌ ĐẶC THÙ)
  {
    id: 'future_in_past_simple',
    tenseNameVi: 'Tương Lai Trong Quá Khứ (Đơn)',
    tenseNameEn: 'Future in the Past Simple (Would + V-bare)',
    category: 'future_in_past',
    categoryLabelVi: 'Tương Lai Trong Quá Khứ (Future in the Past)',
    colorTheme: {
      bg: 'bg-slate-100',
      border: 'border-slate-300',
      text: 'text-slate-900',
      badge: 'bg-slate-200 text-slate-800'
    },
    formulas: [
      {
        label: 'Cấu trúc trợ động từ "Would"',
        formula: 'Wh- + would + S + V_bare?',
        exampleEn: 'What did he say he would do? / Where did they promise they would travel?',
        exampleVi: 'Anh ấy đã nói rằng anh ấy sẽ làm gì? / Họ đã hứa là họ sẽ đi du lịch ở đâu?',
        notes: 'Dùng khi tường thuật lại một lời hứa, dự đoán, hoặc kế hoạch tương lai từ góc nhìn của quá khứ (Will ➔ Would).'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + would + V_bare + O?',
      exampleEn: 'Who did you think would win the championship that year?',
      exampleVi: 'Bạn đã từng nghĩ ai sẽ giành chức vô địch năm đó?',
      wrongExampleEn: 'Who did win (Hỏi quá khứ đơn thông thường, không phải dự đoán từ quá khứ)',
      ruleVi: 'Ghép trực tiếp "would + V_bare" theo sau từ để hỏi.'
    },
    keySignals: ['said that he would', 'promised that they would']
  },
  {
    id: 'future_in_past_continuous',
    tenseNameVi: 'Tương Lai Trong Quá Khứ (Tiếp Diễn / Dự Định)',
    tenseNameEn: 'Future in the Past Continuous (Was/Were going to / Would be V-ing)',
    category: 'future_in_past',
    categoryLabelVi: 'Tương Lai Trong Quá Khứ (Future in the Past)',
    colorTheme: {
      bg: 'bg-zinc-100',
      border: 'border-zinc-300',
      text: 'text-zinc-900',
      badge: 'bg-zinc-200 text-zinc-800'
    },
    formulas: [
      {
        label: 'Cấu trúc "was / were going to + V_bare" & "would be + V-ing"',
        formula: 'Wh- + was / were + S + going to do? / Wh- + would + S + be doing?',
        exampleEn: 'What were you going to say before I interrupted? / Where did they say they would be flying at that hour?',
        exampleVi: 'Bạn đã định nói gì trước khi tôi ngắt lời? / Họ đã nói họ sẽ đang bay đến đâu vào giờ đó?',
        notes: 'Diễn tả một dự định trong quá khứ nhưng có thể đã bị gián đoạn hoặc không thành (was/were going to), hoặc một hành động sẽ đang diễn ra nhìn từ quá khứ.'
      }
    ],
    subjectQuestion: {
      formula: 'Who / What + was going to + V_bare + O?',
      exampleEn: 'Who was going to call the technician before the system rebooted?',
      exampleVi: 'Ai đã định gọi kỹ thuật viên trước khi hệ thống tự khởi động lại?',
      wrongExampleEn: 'Who were going to (Trừ khi biết chắc số nhiều)',
      ruleVi: 'Who hỏi chủ ngữ: chia "was going to + V_bare".'
    },
    keySignals: ['was going to', 'before interrupted']
  }
];

export const WH_PRACTICE_QUESTIONS = [
  {
    id: 1,
    questionText: 'Chọn câu hỏi ĐÚNG cho hành động trong quá khứ: "Ai đã làm vỡ chiếc bình hoa cổ này?"',
    options: [
      'Who did break this antique vase?',
      'Who broke this antique vase?',
      'Who was break this antique vase?',
      'Who did broke this antique vase?'
    ],
    correctIndex: 1,
    explanationVi: 'ĐÂY LÀ SUBJECT QUESTION! "Who" đóng vai trò là chủ ngữ thực hiện hành động làm vỡ (broke). Do đó KHÔNG mượn trợ động từ "did", mà chia động từ trực tiếp ở dạng quá khứ: "Who broke this antique vase?".',
    tenseName: 'Quá Khứ Đơn (Subject Question)'
  },
  {
    id: 2,
    questionText: 'Chọn câu hỏi ĐÚNG khi hỏi tân ngữ: "Bạn đã gặp ai ở bữa tiệc tối qua?"',
    options: [
      'Who you met at the party last night?',
      'Who did you meet at the party last night?',
      'Who did you met at the party last night?',
      'Who met you at the party last night?'
    ],
    correctIndex: 1,
    explanationVi: 'ĐÂY LÀ OBJECT QUESTION! Chủ ngữ trong câu là "you", còn "who" là tân ngữ (người được gặp). Ta bắt buộc phải mượn trợ động từ "did" đưa lên trước S, và động từ chính trở về V-bare: "Who did you meet at the party last night?".',
    tenseName: 'Quá Khứ Đơn (Object Question)'
  },
  {
    id: 3,
    questionText: 'Chọn câu hỏi Wh- đúng ở thì Hiện tại đơn: "Cô ấy muốn uống gì vào buổi sáng?"',
    options: [
      'What does she wants to drink in the morning?',
      'What does she want to drink in the morning?',
      'What is she want to drink in the morning?',
      'What she wants to drink in the morning?'
    ],
    correctIndex: 1,
    explanationVi: 'Công thức Hiện tại đơn với động từ thường: Wh- + do/does + S + V-bare? Với chủ ngữ "she", mượn trợ từ "does", động từ chính "want" giữ nguyên thể không thêm s.',
    tenseName: 'Hiện Tại Đơn'
  },
  {
    id: 4,
    questionText: 'Chọn câu hỏi Wh- đúng ở thì Quá khứ tiếp diễn: "Họ đang làm gì lúc 8 giờ tối hôm qua?"',
    options: [
      'What were they doing at 8 PM yesterday?',
      'What did they do at 8 PM yesterday?',
      'What were they do at 8 PM yesterday?',
      'What was they doing at 8 PM yesterday?'
    ],
    correctIndex: 0,
    explanationVi: 'Công thức Quá khứ tiếp diễn: Wh- + was/were + S + V-ing? Chủ ngữ "they" đi với "were" ➔ "What were they doing at 8 PM yesterday?".',
    tenseName: 'Quá Khứ Tiếp Diễn'
  },
  {
    id: 5,
    questionText: 'Chọn câu hỏi Wh- đúng ở thì Tương lai tiếp diễn: "Vào giờ này ngày mai bạn sẽ đang làm gì?"',
    options: [
      'What will you doing at this time tomorrow?',
      'What will you be doing at this time tomorrow?',
      'What are you be doing at this time tomorrow?',
      'What will be you doing at this time tomorrow?'
    ],
    correctIndex: 1,
    explanationVi: 'Trật tự chuẩn của Tương lai tiếp diễn là: Wh- + will + S + be + V-ing? ➔ "What will you be doing at this time tomorrow?".',
    tenseName: 'Tương Lai Tiếp Diễn'
  },
  {
    id: 6,
    questionText: 'Chọn câu hỏi đúng ở thì Hiện tại hoàn thành tiếp diễn: "Bạn đã học tiếng Anh được bao lâu rồi?"',
    options: [
      'How long have you been studying English?',
      'How long have you studied English been?',
      'How long are you studying English?',
      'How long did you study English?'
    ],
    correctIndex: 0,
    explanationVi: 'Hỏi về độ dài thời gian liên tục từ quá khứ đến nay: How long + have/has + S + been + V-ing? ➔ "How long have you been studying English?".',
    tenseName: 'Hiện Tại Hoàn Thành Tiếp Diễn'
  },
  {
    id: 7,
    questionText: 'Chọn câu hỏi đúng ở thì Tương lai hoàn thành: "Tính đến năm sau bạn sẽ hoàn thành xong những mục tiêu nào?"',
    options: [
      'What will you have achieved by next year?',
      'What will you achieved by next year?',
      'What will you have achieve by next year?',
      'What have you will achieved by next year?'
    ],
    correctIndex: 0,
    explanationVi: 'Công thức Tương lai hoàn thành: Wh- + will + S + have + V3/ed? ➔ "What will you have achieved by next year?".',
    tenseName: 'Tương Lai Hoàn Thành'
  },
  {
    id: 8,
    questionText: 'Chọn câu hỏi Subject Question đúng: "Chuyện gì đã xảy ra tối qua?"',
    options: [
      'What did happen last night?',
      'What happened last night?',
      'What was happen last night?',
      'What did it happen last night?'
    ],
    correctIndex: 1,
    explanationVi: '"What" là chủ ngữ của sự việc xảy ra ➔ KHÔNG dùng trợ động từ "did", chia trực tiếp động từ quá khứ: "What happened last night?".',
    tenseName: 'Quá Khứ Đơn (Subject Question)'
  }
];
