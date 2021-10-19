<template>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="editor-menu">
            <ul>
                <li>
                    <button class="heading" :class="{ 'is-active': varActive.head }" @click="editActive('head')">
                        <p>H</p>
                        <div class="click">
                            <h1 :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })">제목 크기 1</h1>
                            <h2 :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">제목 크기 2</h2>
                            <h3 :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3 })">제목 크기 3</h3>
                            <h4 :class="{ 'is-active': isActive.heading({ level: 4 }) }" @click="commands.heading({ level: 4 })">제목 크기 4</h4>
                            <h5 :class="{ 'is-active': isActive.heading({ level: 5 }) }" @click="commands.heading({ level: 5 })">제목 크기 5</h5>
                            <h6 :class="{ 'is-active': isActive.heading({ level: 6 }) }" @click="commands.heading({ level: 6 })">제목 크기 6</h6>
                        </div>
                        <div class="help">
                            <p>제목</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button class="bold" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                        <p>B</p>
                        <div class="help">
                            <p>굵게</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button class="italic" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
                        <p>I</p>
                        <div class="help">
                            <p>이탤릭</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button class="strike" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
                        <p>S</p>
                        <div class="help">
                            <p>중앙선</p>
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
                    <button :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list">
                        <font-awesome-icon :icon="faListUl" />
                        <div class="help">
                            <p>리스트</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list">
                        <font-awesome-icon :icon="faListOl" />
                        <div class="help">
                            <p>숫자 리스트</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button :class="{ 'is-active': isActive.check_item() }" @click="commands.check_item">
                        <font-awesome-icon :icon="faCheckSquare" />
                        <div class="help">
                            <p>체크 박스</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button :class="{ 'is-active': isActive.linebreak() }" @click="commands.linebreak">
                        <font-awesome-icon :icon="faMinus" />
                        <div class="help">
                            <p>구분 선</p>
                        </div>
                    </button>
                </li>
                <li class="line"></li>
                <li>
                    <button :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
                        <font-awesome-icon :icon="faQuoteLeft" />
                        <div class="help">
                            <p>인용구</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button @click="editActive('link')">
                        <font-awesome-icon :icon="faLink" />
                        <div class="help">
                            <p>링크</p>
                        </div>
                    </button>
                </li>
                <li>
                    <input type="file" ref="imageRef" multiple @change="imageTemporage($event.target.files, commands.images)" />
                    <button @click="imageBtn()">
                        <font-awesome-icon :icon="faImage" />
                        <div class="help">
                            <p>이미지 업로드</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
                        <font-awesome-icon :icon="faYoutube" />
                        <div class="help">
                            <p>동영상 공유</p>
                        </div>
                    </button>
                </li>
            </ul>
            <div class="pop-link" :class="{ 'is-active': varActive.link }">
                <div class="pop-head">
                    <p>링크 삽입</p>
                </div>
                <div class="pop-contents">
                    <label>
                        <p>링크 주소</p>
                        <div class="form-input">
                            <input type="text" v-model="address" id="address" placeholder="http://..." />
                        </div>
                    </label>
                </div>
                <div class="pop-bottom">
                    <button type="button" :class="{ 'is-active': isActive.hyperlink() }" @click="editLink(commands.hyperlink)">확인</button>
                    <button type="button" @click="editActive('link')">취소</button>
                </div>
            </div>
        </div>
    </editor-menu-bar>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQuoteLeft, faLink, faAlignLeft, faAlignRight, faAlignJustify, faListOl, faListUl, faImage, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default {
    name: 'edit-menu'
}
</script>
