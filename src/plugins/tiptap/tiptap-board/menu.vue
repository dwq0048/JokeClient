<template>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="editor-menu" ref="TopMenu" :class="{ active : MenuFixed.TopMenu }">
            <div ref="TopMenuSub">
                <ul>
                    <li class="pop">
                        <button class="heading" :class="{ 'pop-active': MenuActive.heading, 'this-active': isActive.heading() }" @click="MenuAction('heading')" ref="BtnHeading">
                            <i><font-awesome-icon :icon="faHeading" /></i>
                            <div class="help">
                                <p>제목</p>
                            </div>
                        </button>
                        <div class="under" ref="EleHeading">
                            <h1 :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })">제목 크기 1</h1>
                            <h2 :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">제목 크기 2</h2>
                            <h3 :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3 })">제목 크기 3</h3>
                            <h4 :class="{ 'is-active': isActive.heading({ level: 4 }) }" @click="commands.heading({ level: 4 })">제목 크기 4</h4>
                            <h5 :class="{ 'is-active': isActive.heading({ level: 5 }) }" @click="commands.heading({ level: 5 })">제목 크기 5</h5>
                            <h6 :class="{ 'is-active': isActive.heading({ level: 6 }) }" @click="commands.heading({ level: 6 })">제목 크기 6</h6>
                        </div>
                    </li>
                    <li>
                        <button class="bold" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                            <i><font-awesome-icon :icon="faBold" /></i>
                            <div class="help">
                                <p>굵게</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button class="italic" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
                            <i><font-awesome-icon :icon="faItalic" /></i>
                            <div class="help">
                                <p>기울기</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button class="strike" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
                            <i><font-awesome-icon :icon="faStrikethrough" /></i>
                            <div class="help">
                                <p>중앙선</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button class="strike" :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
                            <i><font-awesome-icon :icon="faUnderline" /></i>
                            <div class="help">
                                <p>아래선</p>
                            </div>
                        </button>
                    </li>
                    <li class="line"></li>
                    <li>
                        <button :class="{ 'is-active': isActive.alignleft() }" @click="commands.alignleft">
                            <font-awesome-icon :icon="faAlignLeft" />
                            <div class="help">
                                <p>왼쪽 정렬</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button :class="{ 'is-active': isActive.aligncenter() }" @click="commands.aligncenter">
                            <font-awesome-icon :icon="faAlignJustify" />
                            <div class="help">
                                <p>중앙 정렬</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button :class="{ 'is-active': isActive.alignright() }" @click="commands.alignright">
                            <font-awesome-icon :icon="faAlignRight" />
                            <div class="help">
                                <p>오른쪽 정렬</p>
                            </div>
                        </button>
                    </li>
                    <li class="line"></li>
                    <li>
                        <button :class="{ 'is-active': isActive.listbullet() }" @click="commands.listbullet">
                            <font-awesome-icon :icon="faListUl" />
                            <div class="help">
                                <p>리스트</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button :class="{ 'is-active': isActive.listordered() }" @click="commands.listordered">
                            <font-awesome-icon :icon="faListOl" />
                            <div class="help">
                                <p>숫자 리스트</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
                            <font-awesome-icon :icon="faQuoteLeft" />
                            <div class="help">
                                <p>인용구</p>
                            </div>
                        </button>
                    </li>
                    <li class="line"></li>
                    <li>
                        <button :class="{ 'is-active': isActive.horizontal_rule() }" @click="commands.horizontal_rule">
                            <font-awesome-icon :icon="faMinus" />
                            <div class="help">
                                <p>구분 선</p>
                            </div>
                        </button>
                    </li>
                    <li class="pop wide">
                        <button :class="{ 'pop-active': MenuActive.link }" @click="MenuAction('link')" ref="BtnLink">
                            <font-awesome-icon :icon="faLink" />
                            <div class="help">
                                <p>링크</p>
                            </div>
                        </button>
                        <div class="under">
                            <button type="button" ref="EleLink">
                                <div class="title">
                                    <button type="button" title="닫기">
                                        <i><font-awesome-icon :icon="faTimes" /></i>
                                    </button>
                                    <p>링크 설정</p>
                                </div>
                                <div class="wrap">
                                    <div class="real">
                                        <div class="input">
                                            <input type="text" ref="InLink" placeholder="https://..." v-model="ValueLink" />
                                        </div>
                                        <div class="button">
                                            <button type="button" ref="SubLink" @click="TipCommands('link', commands.link, ValueLink)">
                                                <span>확인</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </editor-menu-bar>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'

import { faTimes, faQuoteLeft, faLink, faAlignLeft, faAlignRight, faAlignJustify, faListOl, faListUl, faImage, faMinus, faCheck, faHeading, faBold, faItalic, faStrikethrough, faUnderline } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'

//import { SET_SCRIPT } from '@/store/helper/index'

export default {
    name: 'edit-menu',
    props: ['editor'],
	components: { Editor, EditorContent },
	data() {
		return {
            // Icons
            faTimes, faQuoteLeft, faLink, faAlignLeft, faAlignRight, faAlignJustify, faListOl, faListUl, faImage, faMinus, faCheck, faHeading, faBold, faItalic, faStrikethrough, faUnderline,
            faCheckSquare,
			
            // Variables
			MenuActive : { heading : false, link: false },
            MenuFixed : { TopMenu : false },
            
            postData : '',
            ValueLink : '',
		}
	},
	methods: {
        MenuAction: function(event){
            const change = (event) => { this.MenuActive[event] = (this.MenuActive[event] == true) ? false : true; };
            switch(event){ case 'heading': change(event); break; case 'link': change(event); break; };
        },
        TipCommands: function(type, command, url){
            const Spend = { link() { command({ href: url }) } };
            Spend[type]();
        },
        OnClick: function(){
            const element = document.activeElement;
            const Ele = {
                heading : { el : this.$refs.EleHeading, btn : this.$refs.BtnHeading },
                link : { el : this.$refs.EleLink, btn : this.$refs.BtnLink, input : this.$refs.InLink, submit : this.$refs.SubLink }
            };
            for (let object in this.MenuActive) {
                if(this.MenuActive[object] == true){
                    switch(element){
                        case Ele[object].el: break;
                        case Ele[object].btn: break;
                        case Ele[object].input: break;
                        case Ele[object].submit: break;
                        default: this.MenuActive[object] = false;
                    }
                }
            }
        },
        EventMenu: function(){
            const TopMenu = this.$refs.TopMenu;
            const TopMenuSub = this.$refs.TopMenuSub;
            const TopElement = TopMenu.getBoundingClientRect();
            const TopPosition = { top: TopElement.top, left: TopElement.left, width: TopElement.width }

            if(TopPosition.top <= 0){
                this.MenuFixed.TopMenu = true;
                TopMenu.style.paddingBottom = `${TopMenuSub.offsetHeight}px`;
                TopMenuSub.style.left = `${TopPosition.left}px`;
                TopMenuSub.style.width = `${TopPosition.width}px`;
            }else{
                this.MenuFixed.TopMenu = false;
                TopMenu.style.paddingBottom = ``;
                TopMenuSub.style.left = ``;
                TopMenuSub.style.width = ``;
            }
        }
    },
    mounted() {
        //SET_SCRIPT.optimizedResize();
        window.addEventListener('click', this.OnClick);
        window.addEventListener('scroll', this.EventMenu);
        window.addEventListener("optimizedResize", this.EventMenu);
    },
    beforeDestroy() {
        window.removeEventListener('click', this.OnClick);
        window.removeEventListener('scroll', this.EventMenu);
        window.removeEventListener("optimizedResize", this.EventMenu);
    }
}
</script>

<style lang="scss" scoped>
    .editor-menu{
        & {
            display: block;
            width: 100%; height: auto;
            position: relative;
            z-index: 10;
        }

        & > div {
            & {
                width: 100%; height: auto;
                border-bottom: 1px solid #ddd;
                background-color: #f9f9f9;
                position: relative;
            }

            & > ul {
                & {
                    font-size: 0;
                    list-style: none;
                    padding:3px 15px;
                    z-index: 10;
                    position: relative;
                }

                & > li {
                    & {
                        display: inline-block;
                        font-size: #{$font-size - 2};
                        margin: 3px 0;
                        vertical-align: middle;
                        position: relative;
                    }

                    & > button {
                        & {
                            border: none;
                            background: none;
                            cursor: pointer;
                            padding: 3px 12px;
                            font-size: #{$font-size - 2};
                            position: relative;
                            outline: none;
                        }

                        & > .help {
                            & {
                                display: none;
                                position: absolute;
                                font-size: #{$font-size - 3};
                                background-color: #333;
                                color: #fff;
                                border-radius: 5px;
                                top: 100%;
                                left: 0;
                                margin-top: 6px;
                            }

                            &:after {
                                content: " ";
                                display: block;
                                position: absolute;
                                left: 0;
                                bottom: 100%;
                                width: 0px;
                                height: 0px;
                                border-top: 8px solid transparent;
                                border-bottom: 8px solid #333;
                                border-left: 8px solid transparent;
                                border-right: 8px solid transparent;
                                margin-left: 10px;
                            }

                            & > p {
                                & {
                                    padding: 5px 15px;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }

                    & > .under {
                        position: absolute;
                        top: 100%; left: 0;
                        width: auto;
                        text-align: left;
                        background-color: #fff;
                        border: 1px solid #ccc;
                        z-index: 1;
                        margin-top: 6px;
                        padding: 15px;
                        white-space: nowrap;
                        line-height: 1.5;
                        display: none;
                        cursor: default;
                        @include box-shadow(3px 3px 3px rgba(0,0,0,0.1));
                    }

                    &.wide {
                        & {
                            position: initial;
                        }
                    }

                    &.wide > .under {
                        & {
                            top: 100%; left: 50%;
                            width: 80%; height: auto;
                            @include transform(translateX(-50%));
                            padding: 0;
                        }

                        & > button {
                            & {
                                width: 100%; height: auto;
                                border: 0; background: none;
                                padding: 0; margin: 0;
                                outline: none;
                            }

                            & > .title {
                                & {
                                    width: 100%; height: 35px;
                                    border-bottom: 1px solid #ddd;
                                    background-color: #f9f9f9;
                                }

                                & > p {
                                    & {
                                        line-height: 34px;
                                        color: #999;
                                        font-size: #{$font-size};
                                        font-weight: bold;
                                        padding-left: 15px;
                                    }
                                }

                                & > button {
                                    & {
                                        padding: 0; margin: 0;
                                        border: 0;
                                        background: none;
                                        outline: none;
                                        width: 34px; height: 34px;
                                        border-left: 1px solid #ddd;
                                        position: relative;
                                        float: right;
                                        background-color: #fff;
                                        cursor: pointer;
                                    }

                                    & > i {
                                        & {
                                            position: absolute;
                                            left: 50%; top: 50%;
                                            font-size: #{$font-size};
                                            color: #999;
                                            @include transform(translate(-50%, -50%));
                                        }
                                    }
                                }
                            }

                            & > .wrap {
                                & {
                                    width: 100%; height: auto;
                                    padding: 15px;
                                    text-align: left;
                                }

                                & > p {
                                    & {
                                        font-size: #{$font-size};
                                        font-weight: bold;
                                        color: #999;
                                        padding: 15px 0px 7px 0px;
                                    }

                                    &:nth-child(1){
                                        & {
                                            padding-top: 0px;
                                        }
                                    }
                                }

                                & > .sub {
                                    & {
                                        width: 100%; height: auto;
                                    }

                                    & > .input {
                                        & {
                                            width: 100%; height: 30px;
                                            border: 1px solid #ccc;
                                            background-color: #eee;
                                            border-radius: 3px;
                                            padding: 0 15px;
                                        }

                                        & > input {
                                            & {
                                                width: 100%; height: 100%;
                                                border: 0; background: none;
                                                padding: 0; margin: 0;
                                                outline: none;
                                                font-size: #{$font-size};
                                                color: #999;
                                            }
                                        }
                                    }
                                }

                                & > .real {
                                    & {
                                        width: 100%; height: auto;
                                        font-size: 0;
                                    }

                                    & > .input {
                                        & {
                                            display: inline-block;
                                            width: 85%; height: 30px;
                                            border: 1px solid #ccc;
                                            background-color: #fff;
                                            border-radius: 3px;
                                            padding: 0 15px;
                                        }

                                        & > input {
                                            & {
                                                width: 100%; height: 100%;
                                                border: 0; background: none;
                                                padding: 0; margin: 0;
                                                outline: none;
                                                font-size: #{$font-size};
                                            }
                                        }
                                    }

                                    & > .button {
                                        & {
                                            display: inline-block;
                                            width: 15%; height: 30px;
                                            padding-left: 15px;
                                        }

                                        & > button {
                                            & {
                                                display: block;
                                                border: 0; background: none;
                                                outline: none;
                                                padding: 0; margin: 0;
                                                background-color: $bg-blue;
                                                color: #fff;
                                                width: 100%; height: 100%;
                                                border-radius: 3px;
                                                font-size: #{$font-size - 2};
                                                cursor: pointer;
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }

                    & > button.pop-active ~ .under {
                        & {
                            display: block;
                        }
                    }

                    &.line {
                        padding: 3px 12px;
                    }

                    &.line:after {
                        width:1px;
                        height: 13px;
                        content: " ";
                        display: block;
                        background-color: #ccc;
                    }
                }

                input[type=file] {
                    display:none;
                }
                
            }
        }

        &.active {
            & > div {
                position: fixed;
                top: 0; left: 0;
            }
        }

    }
</style>
