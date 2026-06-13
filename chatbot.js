// ── chatbot.js ───────────────────────────────────────────────
import { chatbotIntents, chatbotFallback } from './data.js';

export function initChatbot() {
  const fab     = document.getElementById('chatbot-fab');
  const panel   = document.getElementById('chatbot-panel');
  const closeBtn= document.getElementById('chatbot-close');
  const sendBtn = document.getElementById('chatbot-send');
  const input   = document.getElementById('chatbot-input');
  const messages= document.getElementById('chatbot-messages');

  if (!fab || !panel) return;

  fab.addEventListener('click', () => {
    panel.classList.toggle('open');
    const badge = fab.querySelector('.chatbot-unread');
    if (badge) badge.remove();
    if (panel.classList.contains('open')) {
      input.focus();
      scrollToBottom(messages);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', () => panel.classList.remove('open'));

  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    appendBubble(messages, text, 'user');
    input.value = '';
    const typing = appendTyping(messages);
    scrollToBottom(messages);
    setTimeout(() => {
      messages.removeChild(typing);
      const reply = getReply(text);
      appendBubble(messages, reply, 'bot');
      scrollToBottom(messages);
    }, 900 + Math.random() * 600);
  }
}

function getReply(text) {
  const lower = text.toLowerCase();
  for (const intent of chatbotIntents) {
    if (intent.patterns.some(p => lower.includes(p))) {
      return intent.responses[Math.floor(Math.random() * intent.responses.length)];
    }
  }
  return chatbotFallback[Math.floor(Math.random() * chatbotFallback.length)];
}

function appendBubble(container, text, who) {
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = `chat-bubble ${who}`;
  div.innerHTML = `${text}<div class="chat-timestamp">${now}</div>`;
  container.appendChild(div);
  return div;
}

function appendTyping(container) {
  const div = document.createElement('div');
  div.className = 'chat-typing';
  div.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  container.appendChild(div);
  return div;
}

function scrollToBottom(el) {
  if (el) el.scrollTop = el.scrollHeight;
}
