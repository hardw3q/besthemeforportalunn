// ==UserScript==
// @name         Best Theme ННГУ
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Делает тему портала мега крутой
// @author       You
// @match        https://portal.unn.ru/*
// @match        http://portal.unn.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function replaceLogo() {
        // Находим все элементы с классом logo
        const logoElements = document.querySelectorAll('.logo');
        
        logoElements.forEach(function(logoElement) {
            // Проверяем, не заменен ли уже логотип
            if (logoElement.querySelector('.pornhub-logo-custom')) {
                return;
            }
            
            // Находим ссылку с логотипом
            const logoLink = logoElement.querySelector('.logo-link');
            if (!logoLink) return;
            
            // Сохраняем оригинальную ссылку
            const originalHref = logoLink.getAttribute('href');
            const originalTitle = logoLink.getAttribute('title');
            
            // Создаем новый логотип в стиле Pornhub
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
            
            // Создаем часть "Pornhub" (белый текст)
            const pornhubText = document.createElement('span');
            pornhubText.textContent = 'Pornhub';
            pornhubText.style.cssText = `
                color: #FFFFFF;
                letter-spacing: 0.5px;
            `;
            
            // Создаем часть "ННГУ" (оранжевая заливка)
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
            
            // Собираем логотип
            newLogo.appendChild(pornhubText);
            newLogo.appendChild(nnguText);
            
            // Заменяем содержимое ссылки
            logoLink.innerHTML = '';
            logoLink.appendChild(newLogo);
            logoLink.setAttribute('href', originalHref || '#');
            if (originalTitle) {
                logoLink.setAttribute('title', originalTitle);
            }
        });
    }

    function changeHeaderBackground() {
        // Находим элемент хедера
        const header = document.getElementById('header');
        if (header) {
            header.style.backgroundColor = '#0E0E0E';
            header.style.background = '#0E0E0E';
        }
    }

    function changeMenuSwitcherLinesColor() {
        // Находим все элементы menu-switcher-lines
        const menuSwitcherLines = document.querySelectorAll('.menu-switcher-lines');
        
        menuSwitcherLines.forEach(function(element) {
            element.style.backgroundColor = '#FF9000';
            element.style.background = '#FF9000';
        });
        
        // Добавляем CSS стили для псевдоэлементов :before и :after
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
        // Изменяем фон body
        document.body.style.backgroundColor = '#000000';
        document.body.style.background = '#000000';
        
        // Изменяем фон основных контейнеров
        const layoutTables = document.querySelectorAll('.bx-layout-inner-table, .bx-layout-inner-inner-table');
        layoutTables.forEach(function(element) {
            element.style.backgroundColor = '#000000';
            element.style.background = '#000000';
        });
        
        // Добавляем CSS стили для переопределения фона страницы
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
        // Находим элемент по ID sonet_log_microblog_container
        const container = document.getElementById('sonet_log_microblog_container');
        
        if (container) {
            container.style.backgroundColor = '#151515';
            container.style.background = '#151515';
            container.style.color = '#c6c6c6';
            
            // Применяем стили ко всем дочерним элементам
            const allChildren = container.querySelectorAll('*');
            allChildren.forEach(function(child) {
                // Пропускаем кнопки, так как у них свои стили
                if (child.id !== 'blog-submit-button-save' && child.id !== 'blog-submit-button-cancel') {
                    child.style.color = '#c6c6c6';
                }
            });
        }
        
        // Также ищем по классу на случай, если есть элементы с таким классом
        const containersByClass = document.querySelectorAll('.sonet_log_microblog_container');
        containersByClass.forEach(function(element) {
            element.style.backgroundColor = '#151515';
            element.style.background = '#151515';
            element.style.color = '#c6c6c6';
        });
        
        // Стилизуем feed-wrap внутри блока
        const feedWrap = document.querySelector('#sonet_log_microblog_container .feed-wrap');
        if (feedWrap) {
            feedWrap.style.backgroundColor = '#151515';
            feedWrap.style.background = '#151515';
        }
        
        // Добавляем CSS стили для переопределения стилей блока
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
        // Находим все элементы с классами feed-add-post-form feed-add-post-edit-form
        const forms = document.querySelectorAll('.feed-add-post-form.feed-add-post-edit-form');
        
        forms.forEach(function(form) {
            // Принудительно устанавливаем стили через setAttribute для перезаписи inline стилей
            form.setAttribute('style', 
                'background-color: #151515 !important; ' +
                'background: #151515 !important; ' +
                'border: 1px solid #333333 !important; ' +
                'border-radius: 4px !important; ' +
                'color: #c6c6c6 !important;'
            );
            
            // Также применяем через style для совместимости
            form.style.setProperty('background-color', '#151515', 'important');
            form.style.setProperty('background', '#151515', 'important');
            form.style.setProperty('border', '1px solid #333333', 'important');
            form.style.setProperty('border-radius', '4px', 'important');
            form.style.setProperty('color', '#c6c6c6', 'important');
            
            // Применяем стили к дочерним элементам
            const feedAddPostText = form.querySelector('.feed-add-post-text');
            if (feedAddPostText) {
                feedAddPostText.style.setProperty('color', '#c6c6c6', 'important');
                feedAddPostText.style.setProperty('background-color', 'transparent', 'important');
            }
            
            // Стилизуем все дочерние элементы
            const allChildren = form.querySelectorAll('*');
            allChildren.forEach(function(child) {
                // Пропускаем кнопки и специальные элементы
                if (!child.id || (child.id !== 'blog-submit-button-save' && child.id !== 'blog-submit-button-cancel')) {
                    // Устанавливаем цвет текста для текстовых элементов
                    if (child.tagName === 'SPAN' || child.tagName === 'DIV' || child.tagName === 'P' || 
                        child.tagName === 'LABEL' || child.tagName === 'INPUT' || child.tagName === 'TEXTAREA') {
                        child.style.setProperty('color', '#c6c6c6', 'important');
                    }
                }
            });
        });
        
        // Стилизуем блок feed-add-post-blockblogPostForm
        const feedAddPostBlock = document.querySelector('.feed-add-post-blockblogPostForm');
        if (feedAddPostBlock) {
            feedAddPostBlock.style.setProperty('background-color', '#000000', 'important');
            feedAddPostBlock.style.setProperty('background', '#000000', 'important');
        }
        
        // Добавляем CSS стили для формы и всех дочерних элементов
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
        // Находим все блоки задач и популярного
        const taskWidgets = document.querySelectorAll('.sidebar-widget-tasks, .sidebar-widget-popular');
        
        taskWidgets.forEach(function(widget) {
            // Стилизуем фон всего блока
            widget.style.setProperty('background-color', '#151515', 'important');
            widget.style.setProperty('background', '#151515', 'important');
            
            // Стилизуем шапку блока (sidebar-widget-top)
            const topSection = widget.querySelector('.sidebar-widget-top');
            if (topSection) {
                topSection.style.setProperty('background-color', '#FF9900', 'important');
                topSection.style.setProperty('background', '#FF9900', 'important');
            }
            
            // Стилизуем контент блока
            const content = widget.querySelector('.sidebar-widget-content');
            if (content) {
                content.style.setProperty('background-color', '#151515', 'important');
                content.style.setProperty('background', '#151515', 'important');
            }
            
            // Стилизуем текст в шапке (ссылка или обычный текст)
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
            
            // Стилизуем иконку плюса
            const plusIcon = widget.querySelector('.plus-icon');
            if (plusIcon) {
                plusIcon.style.setProperty('color', '#000000', 'important');
            }
            
            // Стилизуем элементы задач
            const taskItems = widget.querySelectorAll('.task-item');
            taskItems.forEach(function(item) {
                item.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            const taskItemTexts = widget.querySelectorAll('.task-item-text');
            taskItemTexts.forEach(function(text) {
                text.style.setProperty('color', '#c6c6c6', 'important');
            });
            
            // Стилизуем элементы популярного
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
        
        // Добавляем CSS стили для блоков
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
        // Находим блок заголовка
        const pagetitleWrap = document.querySelector('.pagetitle-wrap');
        
        if (pagetitleWrap) {
            // Стилизуем фон блока
            pagetitleWrap.style.setProperty('background-color', '#151515', 'important');
            pagetitleWrap.style.setProperty('background', '#151515', 'important');
            
            // Создаем оранжевую шапку через псевдоэлемент или добавляем стили
            pagetitleWrap.style.setProperty('position', 'relative', 'important');
            
            // Стилизуем заголовок
            const pagetitle = pagetitleWrap.querySelector('.pagetitle');
            if (pagetitle) {
                pagetitle.style.setProperty('color', '#c6c6c6', 'important');
            }
            
            // Стилизуем внутренний контейнер
            const pagetitleInnerContainer = pagetitleWrap.querySelector('.pagetitle-inner-container');
            if (pagetitleInnerContainer) {
                pagetitleInnerContainer.style.setProperty('background-color', '#000000', 'important');
                pagetitleInnerContainer.style.setProperty('background', '#000000', 'important');
            }
            
            // Стилизуем контейнер фильтра
            const filterContainer = pagetitleWrap.querySelector('#LIVEFEED_filter_container');
            if (filterContainer) {
                filterContainer.style.setProperty('background-color', 'transparent', 'important');
            }
            
            // Стилизуем меню пагинации
            const pagetitleMenu = pagetitleWrap.querySelector('.pagetitle-menu');
            if (pagetitleMenu) {
                pagetitleMenu.style.setProperty('background-color', 'transparent', 'important');
            }
        }
        
        // Стилизуем инпут поиска
        const searchInput = document.querySelector('#LIVEFEED_search, .main-ui-filter-search-filter');
        if (searchInput) {
            searchInput.style.setProperty('background-color', '#1a1a1a', 'important');
            searchInput.style.setProperty('background', '#1a1a1a', 'important');
            searchInput.style.setProperty('color', '#c6c6c6', 'important');
            searchInput.style.setProperty('border', '1px solid #333333', 'important');
            searchInput.style.setProperty('border-radius', '4px', 'important');
        }
        
        // Стилизуем контейнер поиска
        const searchContainer = document.querySelector('#LIVEFEED_search_container, .main-ui-filter-search');
        if (searchContainer) {
            searchContainer.style.setProperty('background-color', '#1a1a1a', 'important');
            searchContainer.style.setProperty('background', '#1a1a1a', 'important');
        }
        
        // Добавляем CSS стили
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

    function styleFeedItems() {
        // Стилизуем все посты в ленте
        const feedItems = document.querySelectorAll('.feed-item-wrap, .feed-post-block');
        
        feedItems.forEach(function(item) {
            item.style.setProperty('background-color', '#151515', 'important');
            item.style.setProperty('background', '#151515', 'important');
            item.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем контейнеры постов
        const feedPostContWraps = document.querySelectorAll('.feed-post-cont-wrap, .feed-post-block');
        feedPostContWraps.forEach(function(wrap) {
            wrap.style.setProperty('background-color', '#151515', 'important');
            wrap.style.setProperty('background', '#151515', 'important');
        });
        
        // Стилизуем блоки текста постов
        const feedPostTextBlocks = document.querySelectorAll('.feed-post-text-block, .feed-post-text');
        feedPostTextBlocks.forEach(function(block) {
            block.style.setProperty('color', '#c6c6c6', 'important');
            block.style.setProperty('background-color', 'transparent', 'important');
        });
        
        // Удаляем элемент свернутого поста
        const feedPostTextMore = document.querySelectorAll('.feed-post-text-more, .feed-post-text-more-but');
        feedPostTextMore.forEach(function(more) {
            more.style.setProperty('display', 'none', 'important');
        });
        
        // Стилизуем заголовки постов
        const feedPostTitleBlocks = document.querySelectorAll('.feed-post-title-block, .feed-post-user-name, .feed-time');
        feedPostTitleBlocks.forEach(function(title) {
            title.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем ссылки в постах
        const feedPostLinks = document.querySelectorAll('.feed-post-block a, .feed-item-wrap a');
        feedPostLinks.forEach(function(link) {
            if (!link.classList.contains('ui-btn') && !link.classList.contains('feed-inform-ilike')) {
                link.style.setProperty('color', '#c6c6c6', 'important');
            }
        });
        
        // Стилизуем блоки комментариев
        const feedCommentsBlocks = document.querySelectorAll('.feed-comments-block-wrap, .feed-comments-block, .feed-com-block');
        feedCommentsBlocks.forEach(function(block) {
            block.style.setProperty('background-color', '#151515', 'important');
            block.style.setProperty('background', '#151515', 'important');
            block.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем текст комментариев
        const feedComTexts = document.querySelectorAll('.feed-com-text, .feed-com-name, .feed-com-time');
        feedComTexts.forEach(function(text) {
            text.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем имя автора комментария (черный цвет)
        const feedComAuthorNames = document.querySelectorAll('.feed-com-name.feed-author-name');
        feedComAuthorNames.forEach(function(name) {
            name.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем блок текста сообщения комментария (черный цвет текста)
        const feedComTextInnerInner = document.querySelectorAll('.feed-com-text-inner-inner');
        feedComTextInnerInner.forEach(function(messageBlock) {
            messageBlock.style.setProperty('color', '#000000', 'important');
            
            // Черный текст для вложенного div
            const textDiv = messageBlock.querySelector('div');
            if (textDiv) {
                textDiv.style.setProperty('color', '#c6c6c6', 'important');
            }
        });
        
        // Стилизуем основной контент комментария (оранжевый фон)
        const feedComMainContent = document.querySelectorAll('.feed-com-main-content');
        feedComMainContent.forEach(function(mainContent) {
            mainContent.style.setProperty('background-color', '#292929', 'important');
            mainContent.style.setProperty('background', '#292929', 'important');
        });
        
        // Стилизуем блок добавления комментария
        const feedComAddBoxes = document.querySelectorAll('.feed-com-add-box, .feed-com-add-box-outer, .feed-com-footer');
        feedComAddBoxes.forEach(function(box) {
            box.style.setProperty('background-color', '#151515', 'important');
            box.style.setProperty('background', '#151515', 'important');
            box.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем ссылку добавления комментария
        const feedComAddLinks = document.querySelectorAll('.feed-com-add-link');
        feedComAddLinks.forEach(function(link) {
            link.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем информаторы (лайки, комментарии и т.д.)
        const feedInformers = document.querySelectorAll('.feed-post-informers, .feed-inform-item');
        feedInformers.forEach(function(informer) {
            informer.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем файлы в постах
        const feedComFiles = document.querySelectorAll('.feed-com-files, .feed-com-file-name');
        feedComFiles.forEach(function(file) {
            file.style.setProperty('color', '#c6c6c6', 'important');
            file.style.setProperty('background-color', 'transparent', 'important');
        });
        
        // Добавляем CSS стили
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
        // Скрываем элементы анимации меню
        const menuItemLinkAnimations = document.querySelectorAll('.menu-item-link-animation');
        menuItemLinkAnimations.forEach(function(animation) {
            animation.style.setProperty('display', 'none', 'important');
        });
        
        // Добавляем CSS стили для меню
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
            `;
            document.head.appendChild(style);
        }
    }

    function styleWorkareaContent() {
        // Стилизуем контейнеры рабочей области
        const workareaContent = document.querySelectorAll('.workarea-content, .workarea-content-paddings, .orders-wrapper, .orders');
        workareaContent.forEach(function(container) {
            container.style.setProperty('background-color', '#000000', 'important');
            container.style.setProperty('background', '#000000', 'important');
            container.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем таблицу
        const tables = document.querySelectorAll('.table, .table-hover, .table-sm');
        tables.forEach(function(table) {
            table.style.setProperty('background-color', '#151515', 'important');
            table.style.setProperty('background', '#151515', 'important');
            table.style.setProperty('color', '#c6c6c6', 'important');
            table.style.setProperty('border-color', '#333333', 'important');
        });
        
        // Стилизуем заголовки таблицы
        const tableHeaders = document.querySelectorAll('.thead-default, .table thead, .table th');
        tableHeaders.forEach(function(header) {
            header.style.setProperty('background-color', '#151515', 'important');
            header.style.setProperty('background', '#151515', 'important');
            header.style.setProperty('color', '#c6c6c6', 'important');
            header.style.setProperty('border-color', '#333333', 'important');
        });
        
        // Стилизуем строки таблицы
        const tableRows = document.querySelectorAll('.table tbody tr, .table td');
        tableRows.forEach(function(row) {
            row.style.setProperty('background-color', '#151515', 'important');
            row.style.setProperty('background', '#151515', 'important');
            row.style.setProperty('color', '#c6c6c6', 'important');
            row.style.setProperty('border-color', '#333333', 'important');
        });
        
        // Стилизуем hover для строк таблицы
        const tableHoverRows = document.querySelectorAll('.table-hover tbody tr');
        tableHoverRows.forEach(function(row) {
            row.addEventListener('mouseenter', function() {
                this.style.setProperty('background-color', '#1a1a1a', 'important');
            });
            row.addEventListener('mouseleave', function() {
                this.style.setProperty('background-color', '#151515', 'important');
            });
        });
        
        // Стилизуем меню
        const menuTop = document.querySelectorAll('.menu-top, .menu-top-item');
        menuTop.forEach(function(menu) {
            menu.style.setProperty('background-color', '#151515', 'important');
            menu.style.setProperty('background', '#151515', 'important');
            menu.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Убираем фон у nav внутри menu-top
        const menuTopNav = document.querySelectorAll('.menu-top > nav, .menu-top nav');
        menuTopNav.forEach(function(nav) {
            nav.style.setProperty('background', 'transparent', 'important');
            nav.style.setProperty('background-color', 'transparent', 'important');
        });
        
        // Стилизуем ссылки меню
        const menuLinks = document.querySelectorAll('.menu-top-item a');
        menuLinks.forEach(function(link) {
            link.style.setProperty('color', '#c6c6c6', 'important');
            link.style.setProperty('background-color', 'transparent', 'important');
            link.style.setProperty('background', 'transparent', 'important');
        });
        
        // Стилизуем активную ссылку меню
        const activeMenuLinks = document.querySelectorAll('.menu-top-item.active a, .menu-top-item a.active');
        activeMenuLinks.forEach(function(link) {
            link.style.setProperty('color', '#FF9900', 'important');
            link.style.setProperty('background-color', 'transparent', 'important');
            link.style.setProperty('background', 'transparent', 'important');
        });
        
        // Убираем белый фон у всех дочерних элементов меню
        const menuTopItems = document.querySelectorAll('.menu-top-item *');
        menuTopItems.forEach(function(item) {
            if (item.tagName !== 'A') {
                item.style.setProperty('background-color', 'transparent', 'important');
                item.style.setProperty('background', 'transparent', 'important');
            }
        });
        
        // Стилизуем заголовок страницы
        const pageTitle = document.querySelectorAll('.page-title, .page-title h1');
        pageTitle.forEach(function(title) {
            title.style.setProperty('color', '#c6c6c6', 'important');
            title.style.setProperty('background-color', 'transparent', 'important');
        });
        
        // Стилизуем основной контейнер приложения
        const mainArea = document.querySelectorAll('#app-main-area, .main-area, app-root');
        mainArea.forEach(function(area) {
            area.style.setProperty('background-color', '#000000', 'important');
            area.style.setProperty('background', '#000000', 'important');
            area.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем контейнеры зачетной книжки
        const marksWrapper = document.querySelectorAll('.marks-wrapper, .marks, .container-fluid');
        marksWrapper.forEach(function(wrapper) {
            wrapper.style.setProperty('background-color', '#000000', 'important');
            wrapper.style.setProperty('background', '#000000', 'important');
            wrapper.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем вкладки (tabs)
        const dxTabs = document.querySelectorAll('.dx-tab-panel, .dx-tabs, .dx-tabs-wrapper, .dx-tab');
        dxTabs.forEach(function(tab) {
            tab.style.setProperty('background-color', '#151515', 'important');
            tab.style.setProperty('background', '#151515', 'important');
            tab.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем выбранную вкладку
        const dxTabSelected = document.querySelectorAll('.dx-tab-selected, .dx-tab-selected .dx-template-wrapper');
        dxTabSelected.forEach(function(selected) {
            selected.style.setProperty('background-color', '#151515', 'important');
            selected.style.setProperty('background', '#151515', 'important');
            selected.style.setProperty('color', '#FF9900', 'important');
        });
        
        // Стилизуем текст вкладок
        const dxTabContent = document.querySelectorAll('.dx-tab-content, .dx-tab-content span');
        dxTabContent.forEach(function(content) {
            content.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем выбранный текст вкладки
        const dxTabSelectedContent = document.querySelectorAll('.dx-tab-selected .dx-tab-content, .dx-tab-selected .dx-tab-content span');
        dxTabSelectedContent.forEach(function(content) {
            content.style.setProperty('color', '#FF9900', 'important');
        });
        
        // Стилизуем аккордеон
        const dxAccordion = document.querySelectorAll('.dx-accordion, .dx-accordion-wrapper, .dx-accordion-item');
        dxAccordion.forEach(function(accordion) {
            accordion.style.setProperty('background-color', '#151515', 'important');
            accordion.style.setProperty('background', '#151515', 'important');
            accordion.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем заголовки семестров
        const semesterTitles = document.querySelectorAll('.semester-title');
        semesterTitles.forEach(function(title) {
            title.style.setProperty('color', '#c6c6c6', 'important');
            title.style.setProperty('background-color', 'transparent', 'important');
        });
        
        // Стилизуем открытый элемент аккордеона
        const dxAccordionOpened = document.querySelectorAll('.dx-accordion-item-opened, .dx-accordion-item-opened .dx-template-wrapper');
        dxAccordionOpened.forEach(function(opened) {
            opened.style.setProperty('background-color', '#151515', 'important');
            opened.style.setProperty('background', '#151515', 'important');
        });
        
        // Стилизуем обертки шаблонов
        const dxTemplateWrappers = document.querySelectorAll('.dx-template-wrapper, .dx-item-content');
        dxTemplateWrappers.forEach(function(wrapper) {
            wrapper.style.setProperty('background-color', 'transparent', 'important');
            wrapper.style.setProperty('background', 'transparent', 'important');
            wrapper.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем контейнер мультивью
        const dxMultiview = document.querySelectorAll('.dx-multiview-wrapper, .dx-multiview-item-container, .dx-multiview-item');
        dxMultiview.forEach(function(multiview) {
            multiview.style.setProperty('background-color', '#000000', 'important');
            multiview.style.setProperty('background', '#000000', 'important');
            multiview.style.setProperty('color', '#c6c6c6', 'important');
        });
        
        // Стилизуем контейнер табпанела
        const dxTabpanelContainer = document.querySelectorAll('.dx-tabpanel-container, .dx-tabpanel-tabs');
        dxTabpanelContainer.forEach(function(container) {
            container.style.setProperty('background-color', '#151515', 'important');
            container.style.setProperty('background', '#151515', 'important');
        });
        
        // Добавляем CSS стили
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
        // Стилизуем кнопку "Отправить" (основная кнопка)
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
        
        // Стилизуем кнопку "Отменить" (вторичная кнопка)
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
        
        // Добавляем CSS стили для кнопок
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

    // Запускаем замену при загрузке страницы
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            replaceLogo();
            changeHeaderBackground();
            changeMenuSwitcherLinesColor();
            changePageBackground();
            changeSonetLogMicroblogContainerStyles();
            styleFeedAddPostForm();
            styleSidebarWidgetTasks();
            stylePagetitleWrap();
            styleFeedItems();
            styleMenuItems();
            styleWorkareaContent();
            stylePornhubButtons();
        });
    } else {
        replaceLogo();
        changeHeaderBackground();
        changeMenuSwitcherLinesColor();
        changePageBackground();
        changeSonetLogMicroblogContainerStyles();
        styleFeedAddPostForm();
        styleSidebarWidgetTasks();
        stylePagetitleWrap();
        styleFeedItems();
        styleMenuItems();
        styleWorkareaContent();
        stylePornhubButtons();
    }

    // Также запускаем замену после небольшой задержки на случай динамической загрузки
    setTimeout(function() {
        replaceLogo();
        changeHeaderBackground();
        changeMenuSwitcherLinesColor();
        changePageBackground();
        changeSonetLogMicroblogContainerStyles();
        styleFeedAddPostForm();
        styleSidebarWidgetTasks();
        stylePagetitleWrap();
        styleFeedItems();
        styleMenuItems();
        styleWorkareaContent();
        stylePornhubButtons();
    }, 1000);
    setTimeout(function() {
        replaceLogo();
        changeHeaderBackground();
        changeMenuSwitcherLinesColor();
        changePageBackground();
        changeSonetLogMicroblogContainerStyles();
        styleFeedAddPostForm();
        styleSidebarWidgetTasks();
        stylePagetitleWrap();
        styleFeedItems();
        styleMenuItems();
        styleWorkareaContent();
        stylePornhubButtons();
    }, 3000);

    // Используем MutationObserver для отслеживания динамических изменений
    const observer = new MutationObserver(function(mutations) {
        replaceLogo();
        changeHeaderBackground();
        changeMenuSwitcherLinesColor();
        changePageBackground();
        changeSonetLogMicroblogContainerStyles();
        styleFeedAddPostForm();
        styleSidebarWidgetTasks();
        stylePagetitleWrap();
        styleFeedItems();
        styleMenuItems();
        styleWorkareaContent();
        stylePornhubButtons();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();

