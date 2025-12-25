<!-- 主题切换JavaScript -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleIcon = themeToggle.querySelector('i');
    const themeToggleText = themeToggle.querySelector('.theme-toggle-text');
    
    // 初始化主题
    function initTheme() {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark-theme');
        themeToggleIcon.className = 'fa fa-sun-o fa-fw';
        themeToggleText.textContent = '日间模式';
      } else {
        document.documentElement.classList.remove('dark-theme');
        themeToggleIcon.className = 'fa fa-moon-o fa-fw';
        themeToggleText.textContent = '夜间模式';
      }
    }
    
    // 切换主题
    function toggleTheme() {
      const isDark = document.documentElement.classList.toggle('dark-theme');
      
      if (isDark) {
        localStorage.setItem('theme', 'dark');
        themeToggleIcon.className = 'fa fa-sun-o fa-fw';
        themeToggleText.textContent = '日间模式';
      } else {
        localStorage.setItem('theme', 'light');
        themeToggleIcon.className = 'fa fa-moon-o fa-fw';
        themeToggleText.textContent = '夜间模式';
      }
    }
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', initTheme);
    
    // 添加点击事件
    themeToggle.addEventListener('click', toggleTheme);
    
    // 初始化
    initTheme();
  });
</script>