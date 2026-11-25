const ODS_DATA = [
  {
    id: 1,
    title: "Erradicação da Pobreza",
    category: "Social",
    color: "#E5243B",
    icon: "🤝",
    shortDesc: "Acabar com a pobreza em todas as suas formas, em todos os lugares.",
    targets: [
      "Meta 1.1: Erradicar a pobreza extrema para todas as pessoas em todos os lugares.",
      "Meta 1.2: Reduzir pelo menos à metade a proporção de homens, mulheres e crianças que vivem na pobreza.",
      "Meta 1.4: Garantir que todos tenham direitos iguais aos recursos econômicos e acesso aos serviços básicos."
    ]
  },
  {
    id: 2,
    title: "Fome Zero e Agricultura Sustentável",
    category: "Social",
    color: "#DDA63A",
    icon: "🌾",
    shortDesc: "Acabar com a fome, alcançar a segurança alimentar e promover a agricultura sustentável.",
    targets: [
      "Meta 2.1: Acabar com a fome e garantir o acesso de todas as pessoas a alimentos seguros, nutritivos e suficientes.",
      "Meta 2.3: Dobrar a produtividade agrícola e a renda dos pequenos produtores de alimentos.",
      "Meta 2.4: Garantir sistemas sustentáveis de produção de alimentos e práticas agrícolas resilientes."
    ]
  },
  {
    id: 3,
    title: "Saúde e Bem-Estar",
    category: "Social",
    color: "#4C9F38",
    icon: "❤️",
    shortDesc: "Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.",
    targets: [
      "Meta 3.4: Reduzir a mortalidade prematura por doenças não transmissíveis via prevenção e promoção da saúde mental.",
      "Meta 3.5: Reforçar a prevenção e o tratamento do abuso de substâncias.",
      "Meta 3.8: Atingir a cobertura universal de saúde e o acesso a medicamentos e vacinas seguros e eficazes."
    ]
  },
  {
    id: 4,
    title: "Educação de Qualidade",
    category: "Social",
    color: "#C5192D",
    icon: "📚",
    shortDesc: "Assegurar a educação inclusiva e equitativa de qualidade e promover oportunidades de aprendizagem.",
    targets: [
      "Meta 4.1: Garantir que todas as meninas e meninos completem o ensino primário e secundário livre, equitativo e de qualidade.",
      "Meta 4.4: Aumentar substancialmente o número de jovens e adultos com habilidades técnicas e profissionais.",
      "Meta 4.7: Garantir que todos os alunos adquiram conhecimentos necessários para promover o desenvolvimento sustentável."
    ]
  },
  {
    id: 5,
    title: "Igualdade de Gênero",
    category: "Social",
    color: "#FF3A21",
    icon: "⚖️",
    shortDesc: "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.",
    targets: [
      "Meta 5.1: Acabar com todas as formas de discriminação contra todas as mulheres e meninas em toda parte.",
      "Meta 5.5: Garantir a participação plena e efetiva das mulheres e a igualdade de oportunidades para a liderança.",
      "Meta 5.b: Aumentar o uso de tecnologias de base, em particular as TIC, para promover o empoderamento das mulheres."
    ]
  },
  {
    id: 6,
    title: "Água Potável e Saneamento",
    category: "Ambiental",
    color: "#26BDE2",
    icon: "💧",
    shortDesc: "Assegurar a disponibilidade e gestão sustentável da água e saneamento para todos.",
    targets: [
      "Meta 6.1: Alcançar o acesso universal e equitativo à água potável e segura para todos.",
      "Meta 6.3: Melhorar a qualidade da água, reduzindo a poluição e aumentando o reuso seguro.",
      "Meta 6.4: Aumentar substancialmente a eficiência do uso da água em todos os setores."
    ]
  },
  {
    id: 7,
    title: "Energia Limpa e Acessível",
    category: "Ambiental",
    color: "#FCC30B",
    icon: "☀️",
    shortDesc: "Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia para todos.",
    targets: [
      "Meta 7.1: Assegurar o acesso universal, confiável, moderno e a preços acessíveis a serviços de energia.",
      "Meta 7.2: Aumentar substancialmente a participação de energias renováveis na matriz energética global.",
      "Meta 7.3: Dobrar a taxa global de melhoria da eficiência energética."
    ]
  },
  {
    id: 8,
    title: "Trabalho Decente e Crescimento Econômico",
    category: "Econômico",
    color: "#A21942",
    icon: "📈",
    shortDesc: "Promover o crescimento econômico sustentado, inclusivo e sustentável, e o trabalho decente.",
    targets: [
      "Meta 8.2: Atingir níveis mais elevados de produtividade por meio da diversificação, modernização tecnológica e inovação.",
      "Meta 8.5: Alcançar o emprego pleno e produtivo e trabalho decente para todas as mulheres e homens, inclusive para os jovens.",
      "Meta 8.6: Reduzir substancialmente a proporção de jovens sem emprego, educação ou formação."
    ]
  },
  {
    id: 9,
    title: "Indústria, Inovação e Infraestrutura",
    category: "Econômico",
    color: "#FD6925",
    icon: "⚙️",
    shortDesc: "Construir infraestruturas resilientes, promover a industrialização inclusiva e fomentar a inovação.",
    targets: [
      "Meta 9.1: Desenvolver infraestrutura de qualidade, confiável, sustentável e resiliente.",
      "Meta 9.4: Modernizar a infraestrutura e reabilitar as indústrias para torná-las sustentáveis, com uso eficiente de recursos.",
      "Meta 9.c: Aumentar significativamente o acesso às tecnologias de informação e comunicação."
    ]
  },
  {
    id: 10,
    title: "Redução das Desigualdades",
    category: "Social",
    color: "#DD1367",
    icon: "🤲",
    shortDesc: "Reduzir a desigualdade dentro dos países e entre eles.",
    targets: [
      "Meta 10.1: Alcançar e sustentar o crescimento da renda dos 40% da população mais pobre a uma taxa maior que a média nacional.",
      "Meta 10.2: Empoderar e promover a inclusão social, econômica e política de todos.",
      "Meta 10.3: Garantir a igualdade de oportunidades e reduzir as desigualdades de resultados."
    ]
  },
  {
    id: 11,
    title: "Cidades e Comunidades Sustentáveis",
    category: "Ambiental",
    color: "#FD9D24",
    icon: "🏙️",
    shortDesc: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
    targets: [
      "Meta 11.2: Proporcionar o acesso a sistemas de transporte seguros, acessíveis e sustentáveis para todos.",
      "Meta 11.6: Reduzir o impacto ambiental negativo per capita das cidades, incluindo atenção à qualidade do ar e gestão de resíduos.",
      "Meta 11.7: Proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes."
    ]
  },
  {
    id: 12,
    title: "Consumo e Produção Responsáveis",
    category: "Econômico",
    color: "#BF8B2E",
    icon: "♻️",
    shortDesc: "Assegurar padrões de produção e de consumo sustentáveis.",
    targets: [
      "Meta 12.3: Reduzir pela metade o desperdício de alimentos per capita mundial.",
      "Meta 12.5: Reduzir substancialmente a geração de resíduos por meio da prevenção, redução, reciclagem e reuso.",
      "Meta 12.8: Garantir que as pessoas tenham informação relevante e conscientização para o desenvolvimento sustentável."
    ]
  },
  {
    id: 13,
    title: "Ação Contra a Mudança Global do Clima",
    category: "Ambiental",
    color: "#3F7E44",
    icon: "🌍",
    shortDesc: "Tomar medidas urgentes para combater a mudança climática e seus impactos.",
    targets: [
      "Meta 13.1: Reforçar a resiliência e a capacidade de adaptação a riscos relacionados ao clima e às catástrofes naturais.",
      "Meta 13.2: Integrar medidas da mudança do clima nas políticas, estratégias e planejamentos.",
      "Meta 13.3: Melhorar a educação, aumentar a conscientização e a capacidade humana sobre mitigação e adaptação climática."
    ]
  },
  {
    id: 14,
    title: "Vida na Água",
    category: "Ambiental",
    color: "#0A97D9",
    icon: "🐠",
    shortDesc: "Conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos.",
    targets: [
      "Meta 14.1: Prevenir e reduzir significativamente a poluição marinha de todos os tipos, especialmente a advinda de atividades terrestres.",
      "Meta 14.2: Gerir de forma sustentável e proteger os ecossistemas marinhos e costeiros.",
      "Meta 14.4: Regular efetivamente a coleta e acabar com a sobrepesca e práticas destrutivas."
    ]
  },
  {
    id: 15,
    title: "Vida Terrestre",
    category: "Ambiental",
    color: "#56C02B",
    icon: "🌳",
    shortDesc: "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres e deter a perda de biodiversidade.",
    targets: [
      "Meta 15.1: Assegurar a conservação, recuperação e uso sustentável de ecossistemas terrestres e de água doce.",
      "Meta 15.2: Promover a gestão sustentável de todos os tipos de florestas e deter o desmatamento.",
      "Meta 15.5: Tomar medidas urgentes para reduzir a degradação de habitats naturais e deter a perda de biodiversidade."
    ]
  },
  {
    id: 16,
    title: "Paz, Justiça e Instituições Eficazes",
    category: "Institucional",
    color: "#00689D",
    icon: "🕊️",
    shortDesc: "Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável e proporcionar acesso à justiça.",
    targets: [
      "Meta 16.1: Reduzir significativamente todas as formas de violência e as taxas de mortalidade relacionada em todos os lugares.",
      "Meta 16.6: Desenvolver instituições eficazes, responsáveis e transparentes em todos os níveis.",
      "Meta 16.7: Garantir a tomada de decisão responsiva, inclusiva, participativa e representativa em todos os níveis."
    ]
  },
  {
    id: 17,
    title: "Parcerias e Meios de Implementação",
    category: "Institucional",
    color: "#19486A",
    icon: "🌐",
    shortDesc: "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.",
    targets: [
      "Meta 17.6: Melhorar a cooperação regional e internacional e o compartilhamento de conhecimentos em ciência, tecnologia e inovação.",
      "Meta 17.16: Reforçar a parceria global para o desenvolvimento sustentável, complementada por parcerias multissetoriais.",
      "Meta 17.17: Incentivar e promover parcerias públicas, público-privadas e com a sociedade civil eficazes."
    ]
  }
];

const STORAGE_KEY = "ods_plataforma_metas_v1";
const THEME_KEY = "ods_plataforma_theme_v1";

const DEFAULT_GOALS = [
  {
    id: "g-1",
    title: "Implantar coleta seletiva e ponto de reciclagem",
    odsId: 12,
    scope: "Comunidade / Escola",
    deadline: "2026-12-15",
    progress: 70,
    notes: "Instalar lixeiras separadas por material e realizar campanha de conscientização."
  },
  {
    id: "g-2",
    title: "Grupo de estudos e monitoria de reforço escolar",
    odsId: 4,
    scope: "Comunidade / Escola",
    deadline: "2026-11-30",
    progress: 100,
    notes: "Encontros semanais para apoiar estudantes em matemática e leitura."
  },
  {
    id: "g-3",
    title: "Reduzir consumo de energia e água em casa",
    odsId: 13,
    scope: "Pessoal",
    deadline: "2026-12-20",
    progress: 40,
    notes: "Monitorar faturas mensais e substituir lâmpadas antigas por LED."
  }
];

let goals = loadGoals();
let selectedCategory = "all";
let searchQuery = "";
let goalStatusFilter = "all";
let goalOdsFilter = "all";
let currentViewedOdsId = null;

function loadGoals() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [...DEFAULT_GOALS];
  } catch {
    return [...DEFAULT_GOALS];
  }
}

function saveGoals() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* Tema */
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);

  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("themeIcon").textContent = theme === "dark" ? "☀️" : "🌙";
  document.getElementById("themeLabel").textContent = theme === "dark" ? "Tema Claro" : "Tema Escuro";
}

/* KPIs */
function updateKPIs() {
  const total = goals.length;
  const completed = goals.filter(g => Number(g.progress) === 100).length;
  const avg = total ? Math.round(goals.reduce((acc, g) => acc + Number(g.progress), 0) / total) : 0;
  const activeOdsCount = new Set(goals.map(g => Number(g.odsId))).size;

  document.getElementById("kpiTotal").textContent = total;
  document.getElementById("kpiCompleted").textContent = completed;
  document.getElementById("kpiAvgProgress").textContent = `${avg}%`;
  document.getElementById("kpiProgressBar").style.width = `${avg}%`;
  document.getElementById("kpiActiveOds").textContent = `${activeOdsCount} / 17`;
  document.getElementById("tabGoalCount").textContent = total;
}

/* Renderização dos 17 ODS */
function renderOdsGrid() {
  const grid = document.getElementById("odsGrid");
  const filtered = ODS_DATA.filter(ods => {
    const matchesCat = selectedCategory === "all" || ods.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      String(ods.id) === q ||
      `ods ${ods.id}`.includes(q) ||
      ods.title.toLowerCase().includes(q) ||
      ods.shortDesc.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;">Nenhum ODS encontrado para esse filtro.</div>`;
    return;
  }

  grid.innerHTML = filtered
    .map(ods => {
      const linkedCount = goals.filter(g => Number(g.odsId) === ods.id).length;
      return `
        <article class="ods-card" data-ods-id="${ods.id}" tabindex="0" role="button" aria-label="Ver detalhes do ODS ${ods.id}: ${ods.title}">
          <div class="ods-card-top" style="background-color: ${ods.color};">
            <span class="ods-num">${ods.id}</span>
            <span class="ods-icon" aria-hidden="true">${ods.icon}</span>
          </div>
          <div class="ods-card-body">
            <h2 class="ods-card-title">${ods.title}</h2>
            <p class="ods-card-desc">${ods.shortDesc}</p>
            <div class="ods-card-footer">
              <span class="badge-dim">${ods.category}</span>
              <span>${linkedCount} ${linkedCount === 1 ? "meta" : "metas"}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  grid.querySelectorAll(".ods-card").forEach(card => {
    const openDetails = () => openOdsModal(Number(card.dataset.odsId));
    card.addEventListener("click", openDetails);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetails();
      }
    });
  });
}

/* Modal de Detalhes do ODS */
function openOdsModal(odsId) {
  const ods = ODS_DATA.find(item => item.id === odsId);
  if (!ods) return;
  currentViewedOdsId = odsId;

  document.getElementById("odsModalHeader").style.backgroundColor = ods.color;
  document.getElementById("odsModalNumber").textContent = `ODS ${ods.id} • ${ods.category}`;
  document.getElementById("odsModalTitle").textContent = `${ods.icon} ${ods.title}`;
  document.getElementById("odsModalDesc").textContent = ods.shortDesc;
  document.getElementById("odsModalTargets").innerHTML = ods.targets
    .map(target => `<li>${target}</li>`)
    .join("");

  const modal = document.getElementById("odsModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeOdsModal() {
  const modal = document.getElementById("odsModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

/* Renderização de Minhas Metas */
function renderGoalsList() {
  const list = document.getElementById("goalsList");
  const filtered = goals.filter(goal => {
    const prog = Number(goal.progress);
    const matchesStatus =
      goalStatusFilter === "all" ||
      (goalStatusFilter === "completed" && prog === 100) ||
      (goalStatusFilter === "in-progress" && prog < 100);
    const matchesOds = goalOdsFilter === "all" || Number(goal.odsId) === Number(goalOdsFilter);
    return matchesStatus && matchesOds;
  });

  if (!filtered.length) {
    list.innerHTML = `
      <div class="empty-state">
        <p>Nenhuma meta encontrada neste filtro.</p>
        <button class="btn btn-primary" style="margin-top: 12px;" onclick="openGoalModal()">+ Cadastrar primeira meta</button>
      </div>
    `;
    return;
  }

  list.innerHTML = filtered
    .map(goal => {
      const ods = ODS_DATA.find(o => o.id === Number(goal.odsId)) || ODS_DATA[0];
      const deadlineText = goal.deadline
        ? new Date(goal.deadline + "T00:00:00").toLocaleDateString("pt-BR")
        : "Sem prazo";
      return `
        <article class="goal-item" style="border-left-color: ${ods.color};">
          <div>
            <div class="goal-meta-row">
              <span class="goal-ods-pill" style="background-color: ${ods.color};">ODS ${ods.id}: ${ods.title}</span>
              <span class="goal-tag">${goal.scope}</span>
              <span class="goal-tag">Prazo: ${deadlineText}</span>
            </div>
            <h3 class="goal-title">${escapeHtml(goal.title)}</h3>
            ${goal.notes ? `<p class="goal-notes">${escapeHtml(goal.notes)}</p>` : ""}
            <div class="goal-progress-wrap">
              <input class="goal-slider" type="range" min="0" max="100" step="5" value="${goal.progress}" data-goal-id="${goal.id}" aria-label="Progresso de ${escapeHtml(goal.title)}">
              <span class="goal-percent">${goal.progress}%</span>
            </div>
          </div>
          <div class="goal-actions">
            <button class="btn btn-ghost btn-sm" type="button" data-edit-id="${goal.id}">Editar</button>
            <button class="btn btn-ghost btn-sm" type="button" data-delete-id="${goal.id}">Excluir</button>
          </div>
        </article>
      `;
    })
    .join("");

  list.querySelectorAll(".goal-slider").forEach(slider => {
    slider.addEventListener("input", e => {
      const id = e.target.dataset.goalId;
      const val = Number(e.target.value);
      const item = goals.find(g => g.id === id);
      if (item) {
        item.progress = val;
        e.target.nextElementSibling.textContent = `${val}%`;
        saveGoals();
        updateKPIs();
      }
    });
  });

  list.querySelectorAll("[data-edit-id]").forEach(btn => {
    btn.addEventListener("click", () => openGoalModal(btn.dataset.editId));
  });

  list.querySelectorAll("[data-delete-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      goals = goals.filter(g => g.id !== btn.dataset.deleteId);
      saveGoals();
      refreshAll();
      showToast("Meta removida.");
    });
  });
}

/* Modal de Cadastro/Edição de Meta */
function populateOdsSelects() {
  const modalSelect = document.getElementById("goalOdsSelect");
  const filterSelect = document.getElementById("goalOdsFilter");

  const optionsHtml = ODS_DATA.map(
    ods => `<option value="${ods.id}">ODS ${ods.id} - ${ods.title}</option>`
  ).join("");

  modalSelect.innerHTML = optionsHtml;
  filterSelect.innerHTML = `<option value="all">Todos os ODS</option>` + optionsHtml;
}

function openGoalModal(editId = null, preselectedOdsId = null) {
  const form = document.getElementById("goalForm");
  form.reset();

  if (editId) {
    const goal = goals.find(g => g.id === editId);
    if (!goal) return;
    document.getElementById("goalModalTitle").textContent = "Editar Meta";
    document.getElementById("goalId").value = goal.id;
    document.getElementById("goalTitle").value = goal.title;
    document.getElementById("goalOdsSelect").value = goal.odsId;
    document.getElementById("goalScope").value = goal.scope;
    document.getElementById("goalDeadline").value = goal.deadline || "";
    document.getElementById("goalProgress").value = goal.progress;
    document.getElementById("goalProgressValue").textContent = `${goal.progress}%`;
    document.getElementById("goalNotes").value = goal.notes || "";
  } else {
    document.getElementById("goalModalTitle").textContent = "Nova Meta de Ação";
    document.getElementById("goalId").value = "";
    document.getElementById("goalOdsSelect").value = preselectedOdsId || 1;
    document.getElementById("goalProgress").value = 0;
    document.getElementById("goalProgressValue").textContent = "0%";
  }

  const modal = document.getElementById("goalModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeGoalModal() {
  const modal = document.getElementById("goalModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function refreshAll() {
  updateKPIs();
  renderOdsGrid();
  renderGoalsList();
}

/* Inicialização */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  populateOdsSelects();
  refreshAll();

  // Abas
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // Busca e Filtros dos ODS
  document.getElementById("odsSearch").addEventListener("input", e => {
    searchQuery = e.target.value;
    renderOdsGrid();
  });

  document.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedCategory = pill.dataset.category;
      renderOdsGrid();
    });
  });

  // Filtros de Metas
  document.querySelectorAll(".goal-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".goal-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      goalStatusFilter = btn.dataset.status;
      renderGoalsList();
    });
  });

  document.getElementById("goalOdsFilter").addEventListener("change", e => {
    goalOdsFilter = e.target.value;
    renderGoalsList();
  });

  // Modais
  document.getElementById("openNewGoalBtn").addEventListener("click", () => openGoalModal());
  document.getElementById("closeOdsModal").addEventListener("click", closeOdsModal);
  document.getElementById("closeGoalModal").addEventListener("click", closeGoalModal);
  document.getElementById("cancelGoalBtn").addEventListener("click", closeGoalModal);

  document.getElementById("createGoalFromOdsBtn").addEventListener("click", () => {
    const odsId = currentViewedOdsId;
    closeOdsModal();
    openGoalModal(null, odsId);
  });

  document.getElementById("goalProgress").addEventListener("input", e => {
    document.getElementById("goalProgressValue").textContent = `${e.target.value}%`;
  });

  // Salvar formulário de meta
  document.getElementById("goalForm").addEventListener("submit", e => {
    e.preventDefault();
    const id = document.getElementById("goalId").value;
    const payload = {
      id: id || "g-" + Date.now(),
      title: document.getElementById("goalTitle").value.trim(),
      odsId: Number(document.getElementById("goalOdsSelect").value),
      scope: document.getElementById("goalScope").value,
      deadline: document.getElementById("goalDeadline").value,
      progress: Number(document.getElementById("goalProgress").value),
      notes: document.getElementById("goalNotes").value.trim()
    };

    if (id) {
      const idx = goals.findIndex(g => g.id === id);
      if (idx !== -1) goals[idx] = payload;
      showToast("Meta atualizada com sucesso!");
    } else {
      goals.unshift(payload);
      showToast("Nova meta adicionada!");
    }

    saveGoals();
    refreshAll();
    closeGoalModal();
  });

  // Fechar modal clicando fora
  [document.getElementById("odsModal"), document.getElementById("goalModal")].forEach(backdrop => {
    backdrop.addEventListener("click", e => {
      if (e.target === backdrop) {
        closeOdsModal();
        closeGoalModal();
      }
    });
  });
});
