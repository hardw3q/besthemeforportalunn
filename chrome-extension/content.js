(function() {
    'use strict';

    let themeApplied = false;

    function applyTheme() {
        if (themeApplied) return;
        themeApplied = true;
    (function() {
            function injectStyles() {
                if (document.getElementById('pornhub-critical-styles')) {
                    return;
                }
                
                const criticalStyles = document.createElement('style');
                criticalStyles.id = 'pornhub-critical-styles';
                criticalStyles.textContent = `
                    html {
                        background-color: #000000 !important;
                        background: #000000 !important;
                    }
                    body {
                        background-color: #000000 !important;
                        background: #000000 !important;
                    }
                    #header {
                        background-color: #0E0E0E !important;
                        background: #0E0E0E !important;
                    }
                    .menu-switcher-lines,
                    .menu-switcher-lines:before,
                    .menu-switcher-lines:after {
                        background-color: #FF9000 !important;
                        background: #FF9000 !important;
                    }
                    .bx-layout-inner-table,
                    .bx-layout-inner-inner-table {
                        background-color: #000000 !important;
                        background: #000000 !important;
                    }
                    #sonet_log_microblog_container {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .feed-item-wrap,
                    .feed-post-block {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .feed-comments-block-wrap,
                    .feed-com-block {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .workarea-content,
                    .container-fluid,
                    .marks-wrapper {
                        background-color: #000000 !important;
                        background: #000000 !important;
                        color: #c6c6c6 !important;
                    }
                    .table,
                    .table thead,
                    .table th,
                    .table tbody tr,
                    .table td {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                        border-color: #333333 !important;
                    }
                    .menu-top,
                    .menu-top-item {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .dx-tab-panel,
                    .dx-tabs,
                    .dx-tab {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .dx-accordion,
                    .dx-accordion-item {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .pagetitle-wrap {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .sidebar-widget {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .feed-add-post-form {
                        background-color: #151515 !important;
                        background: #151515 !important;
                    }
                `;
                
                if (document.head) {
                    document.head.insertBefore(criticalStyles, document.head.firstChild);
                } else if (document.documentElement) {
                    document.documentElement.insertBefore(criticalStyles, document.documentElement.firstChild);
                } else {
                    const observer = new MutationObserver(function(mutations, obs) {
                        if (document.head) {
                            document.head.insertBefore(criticalStyles, document.head.firstChild);
                            obs.disconnect();
                        } else if (document.documentElement) {
                            document.documentElement.insertBefore(criticalStyles, document.documentElement.firstChild);
                            obs.disconnect();
                        }
                    });
                    if (document.documentElement) {
                        observer.observe(document.documentElement, { childList: true });
                    } else {
                        const docObserver = new MutationObserver(function(mutations, obs) {
                            if (document.documentElement) {
                                injectStyles();
                                obs.disconnect();
                            }
                        });
                        docObserver.observe(document, { childList: true, subtree: true });
                    }
                }
            }
            
            injectStyles();
            
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', injectStyles);
            } else {
                injectStyles();
            }
            
            function applyInlineStyles() {
                if (document.documentElement) {
                    document.documentElement.style.setProperty('background-color', '#000000', 'important');
                    document.documentElement.style.setProperty('background', '#000000', 'important');
                }
                if (document.body) {
                    document.body.style.setProperty('background-color', '#000000', 'important');
                    document.body.style.setProperty('background', '#000000', 'important');
                }
                const header = document.getElementById('header');
                if (header) {
                    header.style.setProperty('background-color', '#0E0E0E', 'important');
                    header.style.setProperty('background', '#0E0E0E', 'important');
                }
            }
            
            applyInlineStyles();
            
            const inlineObserver = new MutationObserver(function() {
                applyInlineStyles();
            });
            
            if (document.documentElement) {
                inlineObserver.observe(document.documentElement, {
                    childList: true,
                    subtree: true
                });
            }
            
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    applyInlineStyles();
                    setTimeout(applyInlineStyles, 0);
                    setTimeout(applyInlineStyles, 10);
                    setTimeout(applyInlineStyles, 50);
                });
            } else {
                setTimeout(applyInlineStyles, 0);
                setTimeout(applyInlineStyles, 10);
                setTimeout(applyInlineStyles, 50);
            }
        })();
    
        function replaceLogo() {
            const logoElements = document.querySelectorAll('.logo');
            
            logoElements.forEach(function(logoElement) {
                if (logoElement.querySelector('.pornhub-logo-custom')) {
                    return;
                }
                
                const logoLink = logoElement.querySelector('.logo-link');
                if (!logoLink) return;
                
                const originalHref = logoLink.getAttribute('href');
                const originalTitle = logoLink.getAttribute('title');
                
                const newLogo = document.createElement('div');
                newLogo.className = 'pornhub-logo-custom';
                newLogo.style.cssText = `
                    display: inline-flex;
                    align-items: center;
                    font-family: Arial, sans-serif;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 1;
                `;
                
                const pornhubText = document.createElement('span');
                pornhubText.textContent = 'Portal';
                pornhubText.style.cssText = `
                    color: #FFFFFF;
                    letter-spacing: 0.5px;
                `;
                
                const nnguText = document.createElement('span');
                nnguText.textContent = 'ННГУ';
                nnguText.style.cssText = `
                    background-color: #FF9900;
                    color: #000000;
                    padding: 4px 8px;
                    border-radius: 4px;
                    margin-left: 2px;
                    font-weight: bold;
                    text-transform: uppercase;
                `;
                
                newLogo.appendChild(pornhubText);
                newLogo.appendChild(nnguText);
                
                logoLink.innerHTML = '';
                logoLink.appendChild(newLogo);
                logoLink.setAttribute('href', originalHref || '#');
                if (originalTitle) {
                    logoLink.setAttribute('title', originalTitle);
                }
            });
        }
        
        function setupLogoObserver() {
            replaceLogo();
            
            const logoObserver = new MutationObserver(function(mutations) {
                let shouldReplace = false;
                
                mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element node
                            if (node.classList && node.classList.contains('logo')) {
                                shouldReplace = true;
                            } else if (node.querySelector && node.querySelector('.logo')) {
                                shouldReplace = true;
                            }
                        }
                    });
                });
                
                if (shouldReplace) {
                    replaceLogo();
                }
            });
            
            if (document.documentElement) {
                logoObserver.observe(document.documentElement, {
                    childList: true,
                    subtree: true
                });
            } else if (document.body) {
                logoObserver.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            } else {
                const bodyObserver = new MutationObserver(function(mutations, obs) {
                    if (document.body || document.documentElement) {
                        logoObserver.observe(document.documentElement || document.body, {
                            childList: true,
                            subtree: true
                        });
                        obs.disconnect();
                    }
                });
                bodyObserver.observe(document, {
                    childList: true,
                    subtree: true
                });
            }
            
            setTimeout(replaceLogo, 0);
            setTimeout(replaceLogo, 10);
            setTimeout(replaceLogo, 50);
            setTimeout(replaceLogo, 100);
            setTimeout(replaceLogo, 200);
        }
        
        setupLogoObserver();
    
        function changeHeaderBackground() {
            const header = document.getElementById('header');
            if (header) {
                header.style.backgroundColor = '#0E0E0E';
                header.style.background = '#0E0E0E';
            }
        }
    
        function changeMenuSwitcherLinesColor() {
            const menuSwitcherLines = document.querySelectorAll('.menu-switcher-lines');
            
            menuSwitcherLines.forEach(function(element) {
                element.style.backgroundColor = '#FF9000';
                element.style.background = '#FF9000';
            });
            
            if (!document.getElementById('pornhub-menu-switcher-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-menu-switcher-styles';
                style.textContent = `
                    .menu-switcher-lines:before,
                    .menu-switcher-lines:after {
                        background-color: #FF9000 !important;
                        background: #FF9000 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    
        function changePageBackground() {
            document.body.style.backgroundColor = '#000000';
            document.body.style.background = '#000000';
            
            const layoutTables = document.querySelectorAll('.bx-layout-inner-table, .bx-layout-inner-inner-table');
            layoutTables.forEach(function(element) {
                element.style.backgroundColor = '#000000';
                element.style.background = '#000000';
            });
            
            if (!document.getElementById('pornhub-page-background-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-page-background-styles';
                style.textContent = `
                    body {
                        background-color: #000000 !important;
                        background: #000000 !important;
                    }
                    .bx-layout-inner-table,
                    .bx-layout-inner-inner-table {
                        background-color: #000000 !important;
                        background: #000000 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    
        function changeSonetLogMicroblogContainerStyles() {
            const container = document.getElementById('sonet_log_microblog_container');
            
            if (container) {
                container.style.backgroundColor = '#151515';
                container.style.background = '#151515';
                container.style.color = '#c6c6c6';
                
                const allChildren = container.querySelectorAll('*');
                allChildren.forEach(function(child) {
                    if (child.id !== 'blog-submit-button-save' && child.id !== 'blog-submit-button-cancel') {
                        child.style.color = '#c6c6c6';
                    }
                });
            }
            
            const containersByClass = document.querySelectorAll('.sonet_log_microblog_container');
            containersByClass.forEach(function(element) {
                element.style.backgroundColor = '#151515';
                element.style.background = '#151515';
                element.style.color = '#c6c6c6';
            });
            
            const feedWrap = document.querySelector('#sonet_log_microblog_container .feed-wrap');
            if (feedWrap) {
                feedWrap.style.backgroundColor = '#151515';
                feedWrap.style.background = '#151515';
            }
            
            if (!document.getElementById('pornhub-sonet-log-microblog-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-sonet-log-microblog-styles';
                style.textContent = `
                    #sonet_log_microblog_container,
                    .sonet_log_microblog_container {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    #sonet_log_microblog_container *,
                    .sonet_log_microblog_container * {
                        color: #c6c6c6 !important;
                    }
                    #sonet_log_microblog_container .feed-wrap,
                    .sonet_log_microblog_container .feed-wrap {
                        background-color: #151515 !important;
                        background: #151515 !important;
                    }
                    #sonet_log_microblog_container .feed-add-post-block,
                    .sonet_log_microblog_container .feed-add-post-block {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    #sonet_log_microblog_container input,
                    #sonet_log_microblog_container textarea,
                    #sonet_log_microblog_container select,
                    .sonet_log_microblog_container input,
                    .sonet_log_microblog_container textarea,
                    .sonet_log_microblog_container select {
                        color: #c6c6c6 !important;
                        background-color: #1a1a1a !important;
                    }
                    #sonet_log_microblog_container a,
                    .sonet_log_microblog_container a {
                        color: #c6c6c6 !important;
                    }
                    #sonet_log_microblog_container span,
                    #sonet_log_microblog_container div,
                    #sonet_log_microblog_container p,
                    .sonet_log_microblog_container span,
                    .sonet_log_microblog_container div,
                    .sonet_log_microblog_container p {
                        color: #c6c6c6 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    
        function styleFeedAddPostForm() {
            const forms = document.querySelectorAll('.feed-add-post-form.feed-add-post-edit-form');
            
            forms.forEach(function(form) {
                form.setAttribute('style', 
                    'background-color: #151515 !important; ' +
                    'background: #151515 !important; ' +
                    'border: 1px solid #333333 !important; ' +
                    'border-radius: 4px !important; ' +
                    'color: #c6c6c6 !important;'
                );
                
                form.style.setProperty('background-color', '#151515', 'important');
                form.style.setProperty('background', '#151515', 'important');
                form.style.setProperty('border', '1px solid #333333', 'important');
                form.style.setProperty('border-radius', '4px', 'important');
                form.style.setProperty('color', '#c6c6c6', 'important');
                
                const feedAddPostText = form.querySelector('.feed-add-post-text');
                if (feedAddPostText) {
                    feedAddPostText.style.setProperty('color', '#c6c6c6', 'important');
                    feedAddPostText.style.setProperty('background-color', 'transparent', 'important');
                }
                
                const allChildren = form.querySelectorAll('*');
                allChildren.forEach(function(child) {
                    if (!child.id || (child.id !== 'blog-submit-button-save' && child.id !== 'blog-submit-button-cancel')) {
                        if (child.tagName === 'SPAN' || child.tagName === 'DIV' || child.tagName === 'P' || 
                            child.tagName === 'LABEL' || child.tagName === 'INPUT' || child.tagName === 'TEXTAREA') {
                            child.style.setProperty('color', '#c6c6c6', 'important');
                        }
                    }
                });
            });
            
            const feedAddPostBlock = document.querySelector('.feed-add-post-blockblogPostForm');
            if (feedAddPostBlock) {
                feedAddPostBlock.style.setProperty('background-color', '#000000', 'important');
                feedAddPostBlock.style.setProperty('background', '#000000', 'important');
            }
            
            if (!document.getElementById('pornhub-feed-add-post-form-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-feed-add-post-form-styles';
                style.textContent = `
                    .feed-add-post-form.feed-add-post-edit-form {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        border: 1px solid #333333 !important;
                        border-radius: 4px !important;
                        color: #c6c6c6 !important;
                    }
                    .feed-add-post-blockblogPostForm {
                        background-color: #000000 !important;
                        background: #000000 !important;
                    }
                    .feed-add-post-form.feed-add-post-edit-form .feed-add-post-text {
                        color: #c6c6c6 !important;
                        background-color: transparent !important;
                    }
                    .feed-add-post-form.feed-add-post-edit-form span,
                    .feed-add-post-form.feed-add-post-edit-form div,
                    .feed-add-post-form.feed-add-post-edit-form p,
                    .feed-add-post-form.feed-add-post-edit-form label {
                        color: #c6c6c6 !important;
                    }
                    .feed-add-post-form.feed-add-post-edit-form input[type="text"],
                    .feed-add-post-form.feed-add-post-edit-form textarea {
                        color: #c6c6c6 !important;
                        background-color: #1a1a1a !important;
                    }
                    .feed-add-post-form.feed-add-post-edit-form .bx-html-editor {
                        background-color: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    
        function styleSidebarWidgetTasks() {
            const taskWidgets = document.querySelectorAll('.sidebar-widget-tasks, .sidebar-widget-popular');
            
            taskWidgets.forEach(function(widget) {
                widget.style.setProperty('background-color', '#151515', 'important');
                widget.style.setProperty('background', '#151515', 'important');
                
                const topSection = widget.querySelector('.sidebar-widget-top');
                if (topSection) {
                    topSection.style.setProperty('background-color', '#FF9900', 'important');
                    topSection.style.setProperty('background', '#FF9900', 'important');
                }
                
                const content = widget.querySelector('.sidebar-widget-content');
                if (content) {
                    content.style.setProperty('background-color', '#151515', 'important');
                    content.style.setProperty('background', '#151515', 'important');
                }
                
                const titleLink = widget.querySelector('.sidebar-widget-top-title a');
                if (titleLink) {
                    titleLink.style.setProperty('color', '#000000', 'important');
                    titleLink.style.setProperty('font-weight', 'bold', 'important');
                }
                
                const titleText = widget.querySelector('.sidebar-widget-top-title');
                if (titleText && !titleLink) {
                    titleText.style.setProperty('color', '#000000', 'important');
                    titleText.style.setProperty('font-weight', 'bold', 'important');
                }
                
                const plusIcon = widget.querySelector('.plus-icon');
                if (plusIcon) {
                    plusIcon.style.setProperty('color', '#000000', 'important');
                }
                
                const taskItems = widget.querySelectorAll('.task-item');
                taskItems.forEach(function(item) {
                    item.style.setProperty('color', '#c6c6c6', 'important');
                });
                
                const taskItemTexts = widget.querySelectorAll('.task-item-text');
                taskItemTexts.forEach(function(text) {
                    text.style.setProperty('color', '#c6c6c6', 'important');
                });
                
                const sidebarItems = widget.querySelectorAll('.sidebar-widget-item');
                sidebarItems.forEach(function(item) {
                    item.style.setProperty('color', '#c6c6c6', 'important');
                });
                
                const userPostNames = widget.querySelectorAll('.user-post-name');
                userPostNames.forEach(function(name) {
                    name.style.setProperty('color', '#c6c6c6', 'important');
                });
                
                const userPostTitles = widget.querySelectorAll('.user-post-title');
                userPostTitles.forEach(function(title) {
                    title.style.setProperty('color', '#c6c6c6', 'important');
                });
            });
            
            if (!document.getElementById('pornhub-sidebar-widget-tasks-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-sidebar-widget-tasks-styles';
                style.textContent = `
                    .sidebar-widget-tasks,
                    .sidebar-widget-popular {
                        background-color: #151515 !important;
                        background: #151515 !important;
                    }
                    .sidebar-widget-tasks .sidebar-widget-top,
                    .sidebar-widget-popular .sidebar-widget-top {
                        background-color: #FF9900 !important;
                        background: #FF9900 !important;
                    }
                    .sidebar-widget-tasks .sidebar-widget-content,
                    .sidebar-widget-popular .sidebar-widget-content {
                        background-color: #151515 !important;
                        background: #151515 !important;
                    }
                    .sidebar-widget-tasks .sidebar-widget-top-title a,
                    .sidebar-widget-popular .sidebar-widget-top-title a {
                        color: #000000 !important;
                        font-weight: bold !important;
                    }
                    .sidebar-widget-tasks .sidebar-widget-top-title,
                    .sidebar-widget-popular .sidebar-widget-top-title {
                        color: #000000 !important;
                        font-weight: bold !important;
                    }
                    .sidebar-widget-tasks .plus-icon,
                    .sidebar-widget-popular .plus-icon {
                        color: #000000 !important;
                    }
                    .sidebar-widget-tasks .plus-icon:before,
                    .sidebar-widget-popular .plus-icon:before {
                        color: #000000 !important;
                    }
                    .sidebar-widget-tasks .task-item,
                    .sidebar-widget-popular .task-item {
                        color: #c6c6c6 !important;
                    }
                    .sidebar-widget-tasks .task-item-text,
                    .sidebar-widget-popular .task-item-text {
                        color: #c6c6c6 !important;
                    }
                    .sidebar-widget-tasks .task-item-index,
                    .sidebar-widget-tasks .task-item-counter,
                    .sidebar-widget-popular .task-item-index,
                    .sidebar-widget-popular .task-item-counter {
                        color: #c6c6c6 !important;
                    }
                    .sidebar-widget-popular .sidebar-widget-item {
                        color: #c6c6c6 !important;
                    }
                    .sidebar-widget-popular .user-post-name,
                    .sidebar-widget-popular .user-post-title {
                        color: #c6c6c6 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    
        function stylePagetitleWrap() {
            const pagetitleWrap = document.querySelector('.pagetitle-wrap');
            
            if (pagetitleWrap) {
                pagetitleWrap.style.setProperty('background-color', '#151515', 'important');
                pagetitleWrap.style.setProperty('background', '#151515', 'important');
                
                pagetitleWrap.style.setProperty('position', 'relative', 'important');
                
                const pagetitle = pagetitleWrap.querySelector('.pagetitle');
                if (pagetitle) {
                    pagetitle.style.setProperty('color', '#c6c6c6', 'important');
                }
                
                const pagetitleInnerContainer = pagetitleWrap.querySelector('.pagetitle-inner-container');
                if (pagetitleInnerContainer) {
                    pagetitleInnerContainer.style.setProperty('background-color', '#000000', 'important');
                    pagetitleInnerContainer.style.setProperty('background', '#000000', 'important');
                }
                
                const filterContainer = pagetitleWrap.querySelector('#LIVEFEED_filter_container');
                if (filterContainer) {
                    filterContainer.style.setProperty('background-color', 'transparent', 'important');
                }
                
                const pagetitleMenu = pagetitleWrap.querySelector('.pagetitle-menu');
                if (pagetitleMenu) {
                    pagetitleMenu.style.setProperty('background-color', 'transparent', 'important');
                }
            }
            
            const searchInput = document.querySelector('#LIVEFEED_search, .main-ui-filter-search-filter');
            if (searchInput) {
                searchInput.style.setProperty('background-color', '#1a1a1a', 'important');
                searchInput.style.setProperty('background', '#1a1a1a', 'important');
                searchInput.style.setProperty('color', '#c6c6c6', 'important');
                searchInput.style.setProperty('border', '1px solid #333333', 'important');
                searchInput.style.setProperty('border-radius', '4px', 'important');
            }
            
            const searchContainer = document.querySelector('#LIVEFEED_search_container, .main-ui-filter-search');
            if (searchContainer) {
                searchContainer.style.setProperty('background-color', '#1a1a1a', 'important');
                searchContainer.style.setProperty('background', '#1a1a1a', 'important');
            }
            
            if (!document.getElementById('pornhub-pagetitle-wrap-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-pagetitle-wrap-styles';
                style.textContent = `
                    .pagetitle-wrap {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        position: relative !important;
                    }
                    .pagetitle-wrap::before {
                        content: '' !important;
                        position: absolute !important;
                        top: 0 !important;
                        left: 0 !important;
                        right: 0 !important;
                        height: 40px !important;
                        background-color: #FF9900 !important;
                        background: #FF9900 !important;
                        z-index: 1 !important;
                    }
                    .pagetitle-wrap .pagetitle {
                        color: #c6c6c6 !important;
                        position: relative !important;
                        z-index: 2 !important;
                    }
                    .pagetitle-wrap .pagetitle-inner-container {
                        background-color: #000000 !important;
                        background: #000000 !important;
                        position: relative !important;
                        z-index: 2 !important;
                    }
                    .pagetitle-wrap .pagetitle-menu {
                        background-color: transparent !important;
                        position: relative !important;
                        z-index: 2 !important;
                    }
                    #LIVEFEED_search,
                    .main-ui-filter-search-filter {
                        background-color: #1a1a1a !important;
                        background: #1a1a1a !important;
                        color: #c6c6c6 !important;
                        border: 1px solid #333333 !important;
                        border-radius: 4px !important;
                    }
                    #LIVEFEED_search::placeholder,
                    .main-ui-filter-search-filter::placeholder {
                        color: #888888 !important;
                    }
                    #LIVEFEED_search_container,
                    .main-ui-filter-search {
                        background-color: #1a1a1a !important;
                        background: #1a1a1a !important;
                    }
                    .pagetitle-container {
                        background-color: transparent !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }

        function stylePageHeaderToolbar() {
            const headerBlocks = document.querySelectorAll(
                '.bx-layout-inner-inner-top-row, .page-header, .page-navigation, .page-toolbar, .ui-toolbar, .ui-toolbar-title-box, .ui-toolbar-title-inner, .ui-toolbar-title-item-box, .pagetitle-below'
            );
            headerBlocks.forEach((el) => {
                el.style.setProperty('background-color', '#000000', 'important');
                el.style.setProperty('background', '#000000', 'important');
                el.style.setProperty('color', '#c6c6c6', 'important');
            });

            const pageTitle = document.getElementById('pagetitle');
            if (pageTitle) {
                pageTitle.style.setProperty('color', '#c6c6c6', 'important');
            }

            const toolbarStar = document.querySelector('.ui-toolbar-star');
            if (toolbarStar) {
                toolbarStar.style.setProperty('filter', 'brightness(0) invert(1)', 'important');
            }

            if (!document.getElementById('pornhub-page-header-toolbar-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-page-header-toolbar-styles';
                style.textContent = `
                    .bx-layout-inner-inner-top-row,
                    .page-header,
                    .page-navigation,
                    .page-toolbar,
                    .ui-toolbar,
                    .ui-toolbar-title-box,
                    .ui-toolbar-title-inner,
                    .ui-toolbar-title-item-box,
                    .pagetitle-below {
                        background-color: #000000 !important;
                        background: #000000 !important;
                        color: #c6c6c6 !important;
                        border: none !important;
                        box-shadow: none !important;
                        outline: none !important;
                    }
                    #pagetitle {
                        color: #c6c6c6 !important;
                    }
                    .ui-toolbar-star {
                        filter: brightness(0) invert(1) !important;
                    }
                    .ui-toolbar .ui-btn,
                    .ui-toolbar .ui-btn-text,
                    .ui-toolbar a,
                    .ui-toolbar button {
                        color: #c6c6c6 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }

        function styleScheduleNavbar() {
            const navbars = document.querySelectorAll('nav.navbar');
            navbars.forEach((nav) => {
                nav.style.setProperty('background-color', '#000000', 'important');
                nav.style.setProperty('background', '#000000', 'important');
                nav.style.setProperty('color', '#c6c6c6', 'important');
                nav.style.setProperty('border', 'none', 'important');
                nav.style.setProperty('box-shadow', 'none', 'important');
            });

            const brandTexts = document.querySelectorAll('.navbar-brand, .navbar-brand span');
            brandTexts.forEach((el) => {
                el.style.setProperty('color', '#FF9900', 'important');
            });

            const navLinks = document.querySelectorAll('.navbar .nav-link, .navbar .btn-link');
            navLinks.forEach((link) => {
                link.style.setProperty('color', '#c6c6c6', 'important');
            });

            const activeLinks = document.querySelectorAll('.navbar .nav-link.active, .navbar .btn-link.active, .navbar .nav-item.active .nav-link');
            activeLinks.forEach((link) => {
                link.style.setProperty('color', '#FF9900', 'important');
            });

            const togglers = document.querySelectorAll('.navbar-toggler');
            togglers.forEach((btn) => {
                btn.style.setProperty('border', '1px solid #333333', 'important');
                btn.style.setProperty('filter', 'invert(1)', 'important');
            });

            const images = document.querySelectorAll('.navbar img');
            images.forEach((img) => {
                img.style.setProperty('border-radius', '6px', 'important');
            });

            if (!document.getElementById('pornhub-ruz-navbar-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-ruz-navbar-styles';
                style.textContent = `
                    nav.navbar {
                        background-color: #000000 !important;
                        background: #000000 !important;
                        color: #c6c6c6 !important;
                        border: none !important;
                        box-shadow: none !important;
                    }
                    nav.navbar .navbar-brand,
                    nav.navbar .navbar-brand span {
                        color: #FF9900 !important;
                    }
                    nav.navbar .nav-link,
                    nav.navbar .btn-link {
                        color: #c6c6c6 !important;
                    }
                    nav.navbar .nav-link.active,
                    nav.navbar .btn-link.active,
                    nav.navbar .nav-item.active .nav-link {
                        color: #FF9900 !important;
                    }
                    nav.navbar .navbar-toggler {
                        border: 1px solid #333333 !important;
                        filter: invert(1) !important;
                    }
                    nav.navbar img {
                        border-radius: 6px !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }

        function styleRuzDates() {
            const dateBoxes = document.querySelectorAll('ruz-date .box');
            dateBoxes.forEach((box) => {
                box.style.setProperty('background-color', '#1a1a1a', 'important');
                box.style.setProperty('background', '#1a1a1a', 'important');
                box.style.setProperty('color', '#c6c6c6', 'important');
                box.style.setProperty('border', '1px solid #333333', 'important');
                box.style.setProperty('border-radius', '6px', 'important');
            });

            const wrappers = document.querySelectorAll('ruz-date, ruz-date .box-wrapper');
            wrappers.forEach((wrap) => {
                wrap.style.setProperty('background', 'transparent', 'important');
                wrap.style.setProperty('border', 'none', 'important');
                wrap.style.setProperty('box-shadow', 'none', 'important');
            });

            const weeks = document.querySelectorAll('ruz-date .week');
            weeks.forEach((el) => {
                el.style.setProperty('color', '#FF9900', 'important');
            });

            const days = document.querySelectorAll('ruz-date .day');
            days.forEach((el) => {
                el.style.setProperty('color', '#FF9900', 'important');
                el.style.setProperty('font-weight', 'bold', 'important');
                el.style.setProperty('background', 'transparent', 'important');
            });

            const months = document.querySelectorAll('ruz-date .month');
            months.forEach((el) => {
                el.style.setProperty('color', '#c6c6c6', 'important');
            });

            if (!document.getElementById('pornhub-ruz-date-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-ruz-date-styles';
                style.textContent = `
                    ruz-date,
                    ruz-date .box-wrapper {
                        background: transparent !important;
                        border: none !important;
                        box-shadow: none !important;
                    }
                    ruz-date .box {
                        background-color: #1a1a1a !important;
                        background: #1a1a1a !important;
                        color: #c6c6c6 !important;
                        border: 1px solid #333333 !important;
                        border-radius: 6px !important;
                        display: inline-block;
                    }
                    ruz-date .week {
                        color: #FF9900 !important;
                    }
                    ruz-date .day {
                        color: #FF9900 !important;
                        font-weight: bold !important;
                        background: transparent !important;
                    }
                    ruz-date .month {
                        color: #c6c6c6 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }

        function styleRuzTimeBlocks() {
            const timeBlocks = document.querySelectorAll('.time, .lesson .time, .lessons-list .time, .schedule .time');
            timeBlocks.forEach((el) => {
                el.style.setProperty('background', 'transparent', 'important');
                el.style.setProperty('color', '#c6c6c6', 'important');
                el.style.setProperty('border', 'none', 'important');
                el.style.setProperty('box-shadow', 'none', 'important');
            });

            if (!document.getElementById('pornhub-ruz-time-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-ruz-time-styles';
                style.textContent = `
                    .time,
                    .lesson .time,
                    .lessons-list .time,
                    .schedule .time {
                        background: transparent !important;
                        color: #c6c6c6 !important;
                        border: none !important;
                        box-shadow: none !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }

        function styleDxSelectInputs() {
            const inputs = document.querySelectorAll('.dx-dropdowneditor-input-wrapper, .dx-selectbox-container, .dx-texteditor, .dx-texteditor-input-container, .dx-texteditor-input');
            inputs.forEach((el) => {
                el.style.setProperty('background', '#292929', 'important');
                el.style.setProperty('color', '#c6c6c6', 'important');
                el.style.setProperty('border', '1px solid #333333', 'important');
                el.style.setProperty('border-radius', '4px', 'important');
            });

            const placeholders = document.querySelectorAll('.dx-placeholder');
            placeholders.forEach((el) => {
                el.style.setProperty('color', '#888888', 'important');
                el.style.setProperty('background', 'transparent', 'important');
            });

            const buttons = document.querySelectorAll('.dx-dropdowneditor-button, .dx-clear-button-area');
            buttons.forEach((el) => {
                el.style.setProperty('background', '#292929', 'important');
                el.style.setProperty('border', 'none', 'important');
            });

            if (!document.getElementById('pornhub-dx-select-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-dx-select-styles';
                style.textContent = `
                    .dx-dropdowneditor-input-wrapper,
                    .dx-selectbox-container,
                    .dx-texteditor,
                    .dx-texteditor-input-container,
                    .dx-texteditor-input {
                        background: #292929 !important;
                        color: #c6c6c6 !important;
                        border: 1px solid #333333 !important;
                        border-radius: 4px !important;
                    }
                    .dx-texteditor-input {
                        padding-left: 8px !important;
                    }
                    .dx-placeholder {
                        color: #888888 !important;
                        background: transparent !important;
                    }
                    .dx-dropdowneditor-button,
                    .dx-clear-button-area {
                        background: #292929 !important;
                        border: none !important;
                    }
                    .dx-button-content,
                    .dx-icon,
                    .dx-dropdowneditor-icon {
                        color: #c6c6c6 !important;
                        fill: #c6c6c6 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }

        function styleContractsTable() {
            const tables = document.querySelectorAll('.p-datatable, .p-datatable-table, .p-datatable-wrapper');
            tables.forEach((table) => {
                table.style.setProperty('background-color', '#000000', 'important');
                table.style.setProperty('background', '#000000', 'important');
                table.style.setProperty('color', '#c6c6c6', 'important');
            });

            const headers = document.querySelectorAll('.p-datatable-thead, .p-datatable-thead th, .p-datatable-thead tr');
            headers.forEach((el) => {
                el.style.setProperty('background-color', '#151515', 'important');
                el.style.setProperty('background', '#151515', 'important');
                el.style.setProperty('color', '#c6c6c6', 'important');
                el.style.setProperty('border-color', '#333333', 'important');
            });

            const bodyCells = document.querySelectorAll('.p-datatable-tbody, .p-datatable-tbody tr, .p-datatable-tbody td');
            bodyCells.forEach((el) => {
                el.style.setProperty('background-color', '#000000', 'important');
                el.style.setProperty('background', '#000000', 'important');
                el.style.setProperty('color', '#c6c6c6', 'important');
                el.style.setProperty('border-color', '#333333', 'important');
            });

            const hoverRows = document.querySelectorAll('.p-datatable-hoverable-rows .p-datatable-tbody tr');
            hoverRows.forEach((row) => {
                row.addEventListener('mouseenter', () => {
                    row.style.setProperty('background-color', '#1a1a1a', 'important');
                });
                row.addEventListener('mouseleave', () => {
                    row.style.setProperty('background-color', '#000000', 'important');
                });
            });

            const links = document.querySelectorAll('.p-datatable a, .p-datatable .link');
            links.forEach((link) => {
                link.style.setProperty('color', '#FF9900', 'important');
            });

            const sortIcons = document.querySelectorAll('.p-sortable-column-icon, .p-icon');
            sortIcons.forEach((icon) => {
                icon.style.setProperty('color', '#c6c6c6', 'important');
                icon.style.setProperty('fill', '#c6c6c6', 'important');
            });

            const popups = document.querySelectorAll('.dx-popup, .dx-popup-content, .dx-overlay-content, .dx-loadpanel, .dx-loadpanel-content');
            popups.forEach((popup) => {
                popup.style.setProperty('background-color', '#151515', 'important');
                popup.style.setProperty('background', '#151515', 'important');
                popup.style.setProperty('color', '#c6c6c6', 'important');
            });

            if (!document.getElementById('pornhub-contracts-table-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-contracts-table-styles';
                style.textContent = `
                    .p-datatable,
                    .p-datatable-table,
                    .p-datatable-wrapper {
                        background-color: #000000 !important;
                        background: #000000 !important;
                        color: #c6c6c6 !important;
                    }
                    .p-datatable-thead,
                    .p-datatable-thead th,
                    .p-datatable-thead tr {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                        border-color: #333333 !important;
                    }
                    .p-datatable-tbody,
                    .p-datatable-tbody tr,
                    .p-datatable-tbody td {
                        background-color: #000000 !important;
                        background: #000000 !important;
                        color: #c6c6c6 !important;
                        border-color: #333333 !important;
                    }
                    .p-datatable-hoverable-rows .p-datatable-tbody tr:hover {
                        background-color: #1a1a1a !important;
                    }
                    .p-datatable a,
                    .p-datatable .link {
                        color: #FF9900 !important;
                    }
                    .p-sortable-column-icon,
                    .p-icon {
                        color: #c6c6c6 !important;
                        fill: #c6c6c6 !important;
                    }
                    .dx-popup,
                    .dx-popup-content,
                    .dx-overlay-content,
                    .dx-loadpanel,
                    .dx-loadpanel-content {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }

        function styleCardTiles() {
            const tiles = document.querySelectorAll('.dx-item.dx-tile, .dx-tile-content, .dx-template-wrapper.card-list-item');
            tiles.forEach((tile) => {
                tile.style.setProperty('background-color', '#151515', 'important');
                tile.style.setProperty('background', '#151515', 'important');
                tile.style.setProperty('color', '#c6c6c6', 'important');
                tile.style.setProperty('border', '1px solid #333333', 'important');
                tile.style.setProperty('border-radius', '8px', 'important');
            });

            const titles = document.querySelectorAll('.card-list-item-title-text, .card-list-item-subtitle');
            titles.forEach((el) => {
                el.style.setProperty('color', '#c6c6c6', 'important');
            });

            const buttons = document.querySelectorAll('.card-list-item .dx-button-default, .card-list-item .dx-button');
            buttons.forEach((btn) => {
                btn.style.setProperty('background-color', '#FF9900', 'important');
                btn.style.setProperty('background', '#FF9900', 'important');
                btn.style.setProperty('color', '#000000', 'important');
                btn.style.setProperty('border', 'none', 'important');
            });

            const buttonTexts = document.querySelectorAll('.card-list-item .dx-button-text');
            buttonTexts.forEach((txt) => {
                txt.style.setProperty('color', '#000000', 'important');
            });

            if (!document.getElementById('pornhub-card-tiles-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-card-tiles-styles';
                style.textContent = `
                    .dx-item.dx-tile,
                    .dx-tile-content,
                    .dx-template-wrapper.card-list-item {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                        border: 1px solid #333333 !important;
                        border-radius: 8px !important;
                    }
                    .card-list-item-title-text,
                    .card-list-item-subtitle {
                        color: #c6c6c6 !important;
                    }
                    .card-list-item .dx-button-default,
                    .card-list-item .dx-button {
                        background-color: #FF9900 !important;
                        background: #FF9900 !important;
                        color: #000000 !important;
                        border: none !important;
                    }
                    .card-list-item .dx-button-text {
                        color: #000000 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
        function styleFeedItems() {
            const feedItems = document.querySelectorAll('.feed-item-wrap, .feed-post-block');
            
            feedItems.forEach(function(item) {
                item.style.setProperty('background-color', '#151515', 'important');
                item.style.setProperty('background', '#151515', 'important');
                item.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const feedPostContWraps = document.querySelectorAll('.feed-post-cont-wrap, .feed-post-block');
            feedPostContWraps.forEach(function(wrap) {
                wrap.style.setProperty('background-color', '#151515', 'important');
                wrap.style.setProperty('background', '#151515', 'important');
            });
            
            const feedPostTextBlocks = document.querySelectorAll('.feed-post-text-block, .feed-post-text');
            feedPostTextBlocks.forEach(function(block) {
                block.style.setProperty('color', '#c6c6c6', 'important');
                block.style.setProperty('background-color', 'transparent', 'important');
            });
            
            const feedPostTextMore = document.querySelectorAll('.feed-post-text-more, .feed-post-text-more-but');
            feedPostTextMore.forEach(function(more) {
                more.style.setProperty('display', 'none', 'important');
            });
            
            const feedPostTitleBlocks = document.querySelectorAll('.feed-post-title-block, .feed-post-user-name, .feed-time');
            feedPostTitleBlocks.forEach(function(title) {
                title.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const feedPostLinks = document.querySelectorAll('.feed-post-block a, .feed-item-wrap a');
            feedPostLinks.forEach(function(link) {
                if (!link.classList.contains('ui-btn') && !link.classList.contains('feed-inform-ilike')) {
                    link.style.setProperty('color', '#c6c6c6', 'important');
                }
            });
            
            const feedCommentsBlocks = document.querySelectorAll('.feed-comments-block-wrap, .feed-comments-block, .feed-com-block');
            feedCommentsBlocks.forEach(function(block) {
                block.style.setProperty('background-color', '#151515', 'important');
                block.style.setProperty('background', '#151515', 'important');
                block.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const feedComTexts = document.querySelectorAll('.feed-com-text, .feed-com-name, .feed-com-time');
            feedComTexts.forEach(function(text) {
                text.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const feedComAuthorNames = document.querySelectorAll('.feed-com-name.feed-author-name');
            feedComAuthorNames.forEach(function(name) {
                name.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const feedComTextInnerInner = document.querySelectorAll('.feed-com-text-inner-inner');
            feedComTextInnerInner.forEach(function(messageBlock) {
                messageBlock.style.setProperty('color', '#000000', 'important');
                
                const textDiv = messageBlock.querySelector('div');
                if (textDiv) {
                    textDiv.style.setProperty('color', '#c6c6c6', 'important');
                }
            });
            
            const feedComMainContent = document.querySelectorAll('.feed-com-main-content');
            feedComMainContent.forEach(function(mainContent) {
                mainContent.style.setProperty('background-color', '#292929', 'important');
                mainContent.style.setProperty('background', '#292929', 'important');
            });
            
            const feedComAddBoxes = document.querySelectorAll('.feed-com-add-box, .feed-com-add-box-outer, .feed-com-footer');
            feedComAddBoxes.forEach(function(box) {
                box.style.setProperty('background-color', '#151515', 'important');
                box.style.setProperty('background', '#151515', 'important');
                box.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const feedComAddLinks = document.querySelectorAll('.feed-com-add-link');
            feedComAddLinks.forEach(function(link) {
                link.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const feedInformers = document.querySelectorAll('.feed-post-informers, .feed-inform-item');
            feedInformers.forEach(function(informer) {
                informer.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const feedComFiles = document.querySelectorAll('.feed-com-files, .feed-com-file-name');
            feedComFiles.forEach(function(file) {
                file.style.setProperty('color', '#c6c6c6', 'important');
                file.style.setProperty('background-color', 'transparent', 'important');
            });
            
            if (!document.getElementById('pornhub-feed-items-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-feed-items-styles';
                style.textContent = `
                    .feed-item-wrap,
                    .feed-post-block {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .feed-post-cont-wrap {
                        background-color: #151515 !important;
                        background: #151515 !important;
                    }
                    .feed-post-text-block,
                    .feed-post-text,
                    .feed-post-text-block-inner,
                    .feed-post-text-block-inner-inner {
                        color: #c6c6c6 !important;
                        background-color: transparent !important;
                    }
                    .feed-post-text-more,
                    .feed-post-text-more-but {
                        display: none !important;
                    }
                    .feed-post-title-block,
                    .feed-post-user-name,
                    .feed-time,
                    .feed-post-time-wrap {
                        color: #c6c6c6 !important;
                    }
                    .feed-post-block a:not(.ui-btn):not(.feed-inform-ilike),
                    .feed-item-wrap a:not(.ui-btn):not(.feed-inform-ilike) {
                        color: #c6c6c6 !important;
                    }
                    .feed-comments-block-wrap,
                    .feed-comments-block,
                    .feed-com-block,
                    .feed-com-block-outer {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .feed-com-text,
                    .feed-com-text-inner,
                    .feed-com-name,
                    .feed-com-time,
                    .feed-com-user-box {
                        color: #c6c6c6 !important;
                    }
                    .feed-com-name.feed-author-name {
                        color: #000000 !important;
                    }
                    .feed-com-text-inner-inner,
                    .feed-com-text-inner-inner div {
                        color: #000000 !important;
                    }
                    .feed-com-main-content {
                        background-color: #FF9900 !important;
                        background: #FF9900 !important;
                    }
                    .feed-com-add-box,
                    .feed-com-add-box-outer,
                    .feed-com-footer {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .feed-com-add-link {
                        color: #c6c6c6 !important;
                    }
                    .feed-post-informers,
                    .feed-inform-item,
                    .feed-inform-comments {
                        color: #c6c6c6 !important;
                    }
                    .feed-com-files,
                    .feed-com-files-title,
                    .feed-com-file-name,
                    .feed-com-file-size {
                        color: #c6c6c6 !important;
                        background-color: transparent !important;
                    }
                    .feed-post-destination-cont,
                    .feed-add-post-destination-new {
                        color: #c6c6c6 !important;
                    }
                    .feed-post-pinned-block,
                    .feed-post-pinned-title,
                    .feed-post-pinned-text-box,
                    .feed-post-pinned-desc,
                    .feed-post-pinned-link {
                        color: #c6c6c6 !important;
                        background-color: transparent !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    
        function styleMenuItems() {
            const menuItemLinkAnimations = document.querySelectorAll('.menu-item-link-animation');
            menuItemLinkAnimations.forEach(function(animation) {
                animation.style.setProperty('display', 'none', 'important');
            });
            
            if (!document.getElementById('pornhub-menu-items-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-menu-items-styles';
                style.textContent = `
                    .menu-item-link:hover {
                        background-color: transparent !important;
                        background: transparent !important;
                    }
                    .menu-item-block:hover,
                    .menu-item-block-hover {
                        background-color: transparent !important;
                        background: transparent !important;
                    }
                    .menu-item-link-animation {
                        display: none !important;
                    }
                    .menu-item-active,
                    .menu-item-block.menu-item-active,
                    .menu-item-link.menu-item-active {
                        background-color: transparent !important;
                        background: transparent !important;
                        color: #c6c6c6 !important;
                    }
                    .menu-item-active a,
                    .menu-item-block.menu-item-active a,
                    .menu-item-link.menu-item-active a {
                        color: #c6c6c6 !important;
                    }
                    .menu-item-active .menu-item-link-text,
                    .menu-item-block.menu-item-active .menu-item-link-text,
                    .menu-item-link.menu-item-active .menu-item-link-text {
                        background-color: #FF9900 !important;
                        background: #FF9900 !important;
                        color: #000000 !important;
                        border-radius: 14px !important;
                        padding: 4px 10px !important;
                        display: inline-block !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    
        function styleWorkareaContent() {
            const workareaContent = document.querySelectorAll('.workarea-content, .workarea-content-paddings, .orders-wrapper, .orders');
            workareaContent.forEach(function(container) {
                container.style.setProperty('background-color', '#000000', 'important');
                container.style.setProperty('background', '#000000', 'important');
                container.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const tables = document.querySelectorAll('.table, .table-hover, .table-sm');
            tables.forEach(function(table) {
                table.style.setProperty('background-color', '#151515', 'important');
                table.style.setProperty('background', '#151515', 'important');
                table.style.setProperty('color', '#c6c6c6', 'important');
                table.style.setProperty('border-color', '#333333', 'important');
            });
            
            const tableHeaders = document.querySelectorAll('.thead-default, .table thead, .table th');
            tableHeaders.forEach(function(header) {
                header.style.setProperty('background-color', '#151515', 'important');
                header.style.setProperty('background', '#151515', 'important');
                header.style.setProperty('color', '#c6c6c6', 'important');
                header.style.setProperty('border-color', '#333333', 'important');
            });
            
            const tableRows = document.querySelectorAll('.table tbody tr, .table td');
            tableRows.forEach(function(row) {
                row.style.setProperty('background-color', '#151515', 'important');
                row.style.setProperty('background', '#151515', 'important');
                row.style.setProperty('color', '#c6c6c6', 'important');
                row.style.setProperty('border-color', '#333333', 'important');
            });
            
            const tableHoverRows = document.querySelectorAll('.table-hover tbody tr');
            tableHoverRows.forEach(function(row) {
                row.addEventListener('mouseenter', function() {
                    this.style.setProperty('background-color', '#1a1a1a', 'important');
                });
                row.addEventListener('mouseleave', function() {
                    this.style.setProperty('background-color', '#151515', 'important');
                });
            });
            
            const menuTop = document.querySelectorAll('.menu-top, .menu-top-item');
            menuTop.forEach(function(menu) {
                menu.style.setProperty('background-color', '#151515', 'important');
                menu.style.setProperty('background', '#151515', 'important');
                menu.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const menuTopNav = document.querySelectorAll('.menu-top > nav, .menu-top nav');
            menuTopNav.forEach(function(nav) {
                nav.style.setProperty('background', 'transparent', 'important');
                nav.style.setProperty('background-color', 'transparent', 'important');
            });
            
            const menuLinks = document.querySelectorAll('.menu-top-item a');
            menuLinks.forEach(function(link) {
                link.style.setProperty('color', '#c6c6c6', 'important');
                link.style.setProperty('background-color', 'transparent', 'important');
                link.style.setProperty('background', 'transparent', 'important');
            });
            
            const activeMenuLinks = document.querySelectorAll('.menu-top-item.active a, .menu-top-item a.active');
            activeMenuLinks.forEach(function(link) {
                link.style.setProperty('color', '#FF9900', 'important');
                link.style.setProperty('background-color', 'transparent', 'important');
                link.style.setProperty('background', 'transparent', 'important');
            });
            
            const menuTopItems = document.querySelectorAll('.menu-top-item *');
            menuTopItems.forEach(function(item) {
                if (item.tagName !== 'A') {
                    item.style.setProperty('background-color', 'transparent', 'important');
                    item.style.setProperty('background', 'transparent', 'important');
                }
            });
            
            const pageTitle = document.querySelectorAll('.page-title, .page-title h1');
            pageTitle.forEach(function(title) {
                title.style.setProperty('color', '#c6c6c6', 'important');
                title.style.setProperty('background-color', 'transparent', 'important');
            });
            
            const mainArea = document.querySelectorAll('#app-main-area, .main-area, app-root');
            mainArea.forEach(function(area) {
                area.style.setProperty('background-color', '#000000', 'important');
                area.style.setProperty('background', '#000000', 'important');
                area.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const marksWrapper = document.querySelectorAll('.marks-wrapper, .marks, .container-fluid');
            marksWrapper.forEach(function(wrapper) {
                wrapper.style.setProperty('background-color', '#000000', 'important');
                wrapper.style.setProperty('background', '#000000', 'important');
                wrapper.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const dxTabs = document.querySelectorAll('.dx-tab-panel, .dx-tabs, .dx-tabs-wrapper, .dx-tab');
            dxTabs.forEach(function(tab) {
                tab.style.setProperty('background-color', '#151515', 'important');
                tab.style.setProperty('background', '#151515', 'important');
                tab.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const dxTabSelected = document.querySelectorAll('.dx-tab-selected, .dx-tab-selected .dx-template-wrapper');
            dxTabSelected.forEach(function(selected) {
                selected.style.setProperty('background-color', '#151515', 'important');
                selected.style.setProperty('background', '#151515', 'important');
                selected.style.setProperty('color', '#FF9900', 'important');
            });
            
            const dxTabContent = document.querySelectorAll('.dx-tab-content, .dx-tab-content span');
            dxTabContent.forEach(function(content) {
                content.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const dxTabSelectedContent = document.querySelectorAll('.dx-tab-selected .dx-tab-content, .dx-tab-selected .dx-tab-content span');
            dxTabSelectedContent.forEach(function(content) {
                content.style.setProperty('color', '#FF9900', 'important');
            });
            
            const dxAccordion = document.querySelectorAll('.dx-accordion, .dx-accordion-wrapper, .dx-accordion-item');
            dxAccordion.forEach(function(accordion) {
                accordion.style.setProperty('background-color', '#151515', 'important');
                accordion.style.setProperty('background', '#151515', 'important');
                accordion.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const semesterTitles = document.querySelectorAll('.semester-title');
            semesterTitles.forEach(function(title) {
                title.style.setProperty('color', '#c6c6c6', 'important');
                title.style.setProperty('background-color', 'transparent', 'important');
            });
            
            const dxAccordionOpened = document.querySelectorAll('.dx-accordion-item-opened, .dx-accordion-item-opened .dx-template-wrapper');
            dxAccordionOpened.forEach(function(opened) {
                opened.style.setProperty('background-color', '#151515', 'important');
                opened.style.setProperty('background', '#151515', 'important');
            });
            
            const dxTemplateWrappers = document.querySelectorAll('.dx-template-wrapper, .dx-item-content');
            dxTemplateWrappers.forEach(function(wrapper) {
                wrapper.style.setProperty('background-color', 'transparent', 'important');
                wrapper.style.setProperty('background', 'transparent', 'important');
                wrapper.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const dxMultiview = document.querySelectorAll('.dx-multiview-wrapper, .dx-multiview-item-container, .dx-multiview-item');
            dxMultiview.forEach(function(multiview) {
                multiview.style.setProperty('background-color', '#000000', 'important');
                multiview.style.setProperty('background', '#000000', 'important');
                multiview.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const dxTabpanelContainer = document.querySelectorAll('.dx-tabpanel-container, .dx-tabpanel-tabs');
            dxTabpanelContainer.forEach(function(container) {
                container.style.setProperty('background-color', '#151515', 'important');
                container.style.setProperty('background', '#151515', 'important');
            });
            
            if (!document.getElementById('pornhub-workarea-content-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-workarea-content-styles';
                style.textContent = `
                    .workarea-content,
                    .workarea-content-paddings,
                    .orders-wrapper,
                    .orders {
                        background-color: #000000 !important;
                        background: #000000 !important;
                        color: #c6c6c6 !important;
                    }
                    .table,
                    .table-hover,
                    .table-sm {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                        border-color: #333333 !important;
                    }
                    .table thead,
                    .table th,
                    .thead-default {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                        border-color: #333333 !important;
                    }
                    .table tbody tr,
                    .table td {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                        border-color: #333333 !important;
                    }
                    .table-hover tbody tr:hover {
                        background-color: #1a1a1a !important;
                        background: #1a1a1a !important;
                    }
                    .menu-top,
                    .menu-top-item {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .menu-top-item a {
                        color: #c6c6c6 !important;
                        background-color: transparent !important;
                        background: transparent !important;
                    }
                    .menu-top-item.active a,
                    .menu-top-item a.active {
                        color: #FF9900 !important;
                        background-color: transparent !important;
                        background: transparent !important;
                    }
                    .menu-top-item *:not(a) {
                        background-color: transparent !important;
                        background: transparent !important;
                    }
                    .menu-top-item::before,
                    .menu-top-item::after,
                    .menu-top-item a::before,
                    .menu-top-item a::after {
                        background-color: transparent !important;
                        background: transparent !important;
                    }
                    .menu-top > nav,
                    div[ngcontent] > nav[ngcontent],
                    div[_ngcontent] > nav[_ngcontent] {
                        background: transparent !important;
                        background-color: transparent !important;
                    }
                    .page-title,
                    .page-title h1 {
                        color: #c6c6c6 !important;
                        background-color: transparent !important;
                    }
                    #app-main-area,
                    .main-area,
                    app-root {
                        background-color: #000000 !important;
                        background: #000000 !important;
                        color: #c6c6c6 !important;
                    }
                    .marks-wrapper,
                    .marks,
                    .container-fluid {
                        background-color: #000000 !important;
                        background: #000000 !important;
                        color: #c6c6c6 !important;
                    }
                    .dx-tab-panel,
                    .dx-tabs,
                    .dx-tabs-wrapper,
                    .dx-tab {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .dx-tab-selected,
                    .dx-tab-selected .dx-template-wrapper {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #FF9900 !important;
                    }
                    .dx-tab-content,
                    .dx-tab-content span {
                        color: #c6c6c6 !important;
                    }
                    .dx-tab-selected .dx-tab-content,
                    .dx-tab-selected .dx-tab-content span {
                        color: #FF9900 !important;
                    }
                    .dx-accordion,
                    .dx-accordion-wrapper,
                    .dx-accordion-item {
                        background-color: #151515 !important;
                        background: #151515 !important;
                        color: #c6c6c6 !important;
                    }
                    .semester-title {
                        color: #c6c6c6 !important;
                        background-color: transparent !important;
                    }
                    .dx-accordion-item-opened,
                    .dx-accordion-item-opened .dx-template-wrapper {
                        background-color: #151515 !important;
                        background: #151515 !important;
                    }
                    .dx-template-wrapper,
                    .dx-item-content {
                        background-color: transparent !important;
                        background: transparent !important;
                        color: #c6c6c6 !important;
                    }
                    .dx-multiview-wrapper,
                    .dx-multiview-item-container,
                    .dx-multiview-item {
                        background-color: #000000 !important;
                        background: #000000 !important;
                        color: #c6c6c6 !important;
                    }
                    .dx-tabpanel-container,
                    .dx-tabpanel-tabs {
                        background-color: #151515 !important;
                        background: #151515 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    
        function stylePornhubButtons() {
            const saveButton = document.getElementById('blog-submit-button-save');
            if (saveButton) {
                saveButton.style.backgroundColor = '#FF9900';
                saveButton.style.background = '#FF9900';
                saveButton.style.color = '#000000';
                saveButton.style.border = 'none';
                saveButton.style.borderRadius = '4px';
                saveButton.style.fontWeight = 'bold';
                saveButton.style.cursor = 'pointer';
                saveButton.style.transition = 'background-color 0.2s';
            }
            
            const cancelButton = document.getElementById('blog-submit-button-cancel');
            if (cancelButton) {
                cancelButton.style.backgroundColor = 'transparent';
                cancelButton.style.background = 'transparent';
                cancelButton.style.color = '#c6c6c6';
                cancelButton.style.border = '1px solid #c6c6c6';
                cancelButton.style.borderRadius = '4px';
                cancelButton.style.fontWeight = 'normal';
                cancelButton.style.cursor = 'pointer';
                cancelButton.style.transition = 'all 0.2s';
            }
            
            if (!document.getElementById('pornhub-buttons-styles')) {
                const style = document.createElement('style');
                style.id = 'pornhub-buttons-styles';
                style.textContent = `
                    #blog-submit-button-save {
                        background-color: #FF9900 !important;
                        background: #FF9900 !important;
                        color: #000000 !important;
                        border: none !important;
                        border-radius: 4px !important;
                        font-weight: bold !important;
                        cursor: pointer !important;
                        transition: background-color 0.2s !important;
                    }
                    #blog-submit-button-save:hover {
                        background-color: #FFAA00 !important;
                        background: #FFAA00 !important;
                    }
                    #blog-submit-button-cancel {
                        background-color: transparent !important;
                        background: transparent !important;
                        color: #c6c6c6 !important;
                        border: 1px solid #c6c6c6 !important;
                        border-radius: 4px !important;
                        font-weight: normal !important;
                        cursor: pointer !important;
                        transition: all 0.2s !important;
                    }
                    #blog-submit-button-cancel:hover {
                        background-color: rgba(198, 198, 198, 0.1) !important;
                        border-color: #FF9900 !important;
                        color: #FF9900 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                changeHeaderBackground();
                changeMenuSwitcherLinesColor();
                changePageBackground();
                changeSonetLogMicroblogContainerStyles();
                styleFeedAddPostForm();
                styleSidebarWidgetTasks();
                stylePagetitleWrap();
                stylePageHeaderToolbar();
                styleScheduleNavbar();
                styleRuzDates();
                styleRuzTimeBlocks();
                styleDxSelectInputs();
                styleContractsTable();
                styleCardTiles();
                styleFeedItems();
                styleMenuItems();
                styleWorkareaContent();
                stylePornhubButtons();
            });
        } else {
            changeHeaderBackground();
            changeMenuSwitcherLinesColor();
            changePageBackground();
            changeSonetLogMicroblogContainerStyles();
            styleFeedAddPostForm();
            styleSidebarWidgetTasks();
            stylePagetitleWrap();
            stylePageHeaderToolbar();
            styleScheduleNavbar();
            styleRuzDates();
            styleRuzTimeBlocks();
            styleDxSelectInputs();
            styleContractsTable();
            styleCardTiles();
            styleFeedItems();
            styleMenuItems();
            styleWorkareaContent();
            stylePornhubButtons();
        }
    
        setTimeout(function() {
            changeHeaderBackground();
            changeMenuSwitcherLinesColor();
            changePageBackground();
            changeSonetLogMicroblogContainerStyles();
            styleFeedAddPostForm();
            styleSidebarWidgetTasks();
            stylePagetitleWrap();
            stylePageHeaderToolbar();
            styleScheduleNavbar();
            styleRuzDates();
            styleRuzTimeBlocks();
            styleDxSelectInputs();
            styleContractsTable();
            styleCardTiles();
            styleFeedItems();
            styleMenuItems();
            styleWorkareaContent();
            stylePornhubButtons();
        }, 1000);
        setTimeout(function() {
            changeHeaderBackground();
            changeMenuSwitcherLinesColor();
            changePageBackground();
            changeSonetLogMicroblogContainerStyles();
            styleFeedAddPostForm();
            styleSidebarWidgetTasks();
            stylePagetitleWrap();
            stylePageHeaderToolbar();
            styleScheduleNavbar();
            styleRuzDates();
            styleRuzTimeBlocks();
            styleDxSelectInputs();
            styleContractsTable();
            styleCardTiles();
            styleFeedItems();
            styleMenuItems();
            styleWorkareaContent();
            stylePornhubButtons();
        }, 3000);
    
        const observer = new MutationObserver(function(mutations) {
            changeHeaderBackground();
            changeMenuSwitcherLinesColor();
            changePageBackground();
            changeSonetLogMicroblogContainerStyles();
            styleFeedAddPostForm();
            styleSidebarWidgetTasks();
            stylePagetitleWrap();
            stylePageHeaderToolbar();
            styleScheduleNavbar();
            styleRuzDates();
            styleRuzTimeBlocks();
            styleDxSelectInputs();
            styleContractsTable();
            styleCardTiles();
            styleFeedItems();
            styleMenuItems();
            styleWorkareaContent();
            stylePornhubButtons();
        });
    
        if (document.body) {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        } else {
            const bodyWaitObserver = new MutationObserver(function(mutations, obs) {
                if (document.body) {
                    observer.observe(document.body, {
                        childList: true,
                        subtree: true
                    });
                    obs.disconnect();
                }
            });
            bodyWaitObserver.observe(document.documentElement || document, {
                childList: true,
                subtree: true
            });
        }

    }

    function removeTheme() {
        if (!themeApplied) return;
        themeApplied = false;
        window.location.reload();
    }

    chrome.storage?.local.get({ enabled: true }, ({ enabled }) => {
        if (enabled) {
            applyTheme();
        }
    });

    chrome.runtime?.onMessage.addListener((msg) => {
        if (msg?.type === 'toggle-theme') {
            if (msg.enabled) {
                applyTheme();
            } else {
                removeTheme();
            }
        }
    });
})();
