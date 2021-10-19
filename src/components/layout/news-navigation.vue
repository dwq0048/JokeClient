<template>
    <div class="news-navigation bounce">
        <div>
            <div>
                <!-- widget 1 -->
                <div class="widget-1">
                    <div class="title">

                    </div>
                    <ul>
                        <li v-for="(item, index) in ListPop" :key="index">
                            <div>
                                <div class="text">
                                    <div>

                                    </div>
                                </div>
                                <div class="thumb">
                                    <div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- widget 1 End -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'NewsNavigation',
    data(){
        return {
            // Variables
            ListPop : [
                {},{},{},{},{}
            ]
        }
    },
	mounted(){
		const BounceList = document.querySelectorAll('.bounce');
		BounceList.forEach((item) => {
			item.classList.add('done');
		})
	}
}
</script>

<style lang="scss" scoped>
    .news-navigation {
        & {
            display: inline-block;
            vertical-align: top;
            white-space: nowrap;
        }

        & > div {
            & {
                display: block;
                width: 300px; height: auto;
                padding-left: 25px;
                margin-top: 25px;
            }

            & > div {
                & {
                    display: block;
                    width: 100%; height: 500px;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 2px;
                    @include box-shadow(1px 1px 1px rgba(0,0,0,0.1));
                }
            }
        }
    }

    .widget-1 {
        & {
            width: 100%; height: auto;
        }

        & > ul {
            & {
                display: block;
                width: 100%; height: auto;
                margin: 0; padding: 0;
                list-style: none;
            }

            & > li {
                & {
                    display: block;
                    width: 100%; height: auto;
                    padding: 0 10px;
                }

                & > div {
                    & {
                        display: table;
                        width: 100%; height: auto;
                        padding: 10px 0;
                        border-bottom: 1px solid #ddd;
                    }

                    & > .text {
                        & {
                            display: table-cell;
                            vertical-align: top;
                            width: 100%; height: 100%;
                        }
                    }

                    & > .thumb {
                        & {
                            display: table-cell;
                            vertical-align: top;
                            white-space: nowrap;
                        }

                        & > div {
                            & {
                                display: block;
                                position: relative;
                                width: 100px; height: auto;
                            }

                            &:after {
                                content: " ";
                                display: block;
                                padding-bottom: 60%;
                            }

                            & > div {
                                & {
                                    display: block;
                                    position: absolute;
                                    left: 0; height: 0;
                                    width: 100%; height: 100%;
                                    background-color: #eee;
                                }
                            }
                        }
                    }
                }

                &:nth-last-child(1){
                    & > div {
                        & {
                            border-bottom: 0;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1229px) {
        .news-navigation {
            & {
                display: none;
            }
        }
    }
</style>
