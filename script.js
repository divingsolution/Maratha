(() => {
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if (!reduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
   if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold:0.08});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  document.documentElement.classList.add('motion');
 }
 const bar=document.querySelector('.progress');
 function progress(){const total=document.documentElement.scrollHeight-innerHeight;bar.style.width=(total>0?scrollY/total*100:0)+'%';}
 addEventListener('scroll',progress,{passive:true});addEventListener('resize',progress);progress();
 const config=window.TOUR_CONFIG||{};
 const input=document.querySelector('#account-number'),button=document.querySelector('#copy-account'),help=document.querySelector('#account-help');
 if(config.bank?.trim() && config.accountNumber?.trim() && config.accountHolder?.trim()){
  input.value=`${config.bank} ${config.accountNumber} (${config.accountHolder})`;
  button.disabled=false;button.textContent='계좌 복사';help.textContent='은행·계좌번호·예금주를 함께 복사합니다.';
 }
 button.addEventListener('click',async()=>{
  try{if(!navigator.clipboard)throw new Error('clipboard unavailable');await navigator.clipboard.writeText(input.value);const toast=document.querySelector('#toast');toast.textContent='입금 계좌를 복사했습니다.';toast.style.display='block';setTimeout(()=>toast.style.display='none',2500);}
  catch{input.focus();input.select();help.textContent='자동 복사를 사용할 수 없습니다. 선택된 계좌를 길게 누르거나 Ctrl/Cmd+C로 복사해주세요.';}
 });
})();
