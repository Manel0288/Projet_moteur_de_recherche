<template>
    <v-card>
        <v-container v-if="pages.length > 0">
            <v-row
                    no-gutters
                    v-for="(page, i) in rPages"
                    :key="i"
                    class="grey lighten-5 mb-2"
            >
                <v-col
                        cols="2"
                        md="2"
                >
                    <v-card
                            class="pa-2"
                            outlined
                            tile
                    >
                        <v-avatar
                                class="profile"
                                color="grey"
                                size="164"
                                tile
                        >
                            <v-img v-if="page.image_src !== 'unknown'" :src="page.image_src"></v-img>
                            <v-img v-else src="/notFoundImg.png"></v-img>
                        </v-avatar>
                    </v-card>

                </v-col>
                <v-col
                   cols="12"
                   sm="8"
                   md="10"
                >
                    <v-card-title class="headline pt-0">
                        <router-link :to="{path: '/detail/' + paramId(i)}" >{{page.name}}</router-link>
                    </v-card-title>

                    <v-card-subtitle v-if="page.type_cuisine !== 'unknown'">{{page.type_cuisine}}</v-card-subtitle>
                    <v-card-text>
                        <v-row>
                        <v-col cols="12" class="text-lg-justify">
                            <div v-if="page.budget !== 'unknown'">
                                <span class="font-weight-bold body-1">budget :</span>
                                <span>{{page.budget}}</span>
                            </div>

                            <div v-if="page.description !== 'unknown'" class="subtitle-1">
                                <span class="font-weight-bold">description :</span>
                                <span>{{page.description}}</span>
                            </div>

                                <div class="subtitle-1">
                                    <span class="font-weight-bold">adresse :</span>
                                    <span>{{page.address}}</span>
                                </div>

                                <div v-if="page.area_clockwise !== 'unknown'">
                                    <span class="font-weight-bold">{{page.area_clockwise}}</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-actions>
                        <v-icon text>mdi-star-outline</v-icon>
                        <span>4/5</span>
                        <v-spacer></v-spacer>
                        <span v-if="page.view"> {{page.view}} vues</span>
                    </v-card-actions>
                </v-col>
            </v-row>
            <div class="text-center">
                <v-pagination
                        v-model="currentPage"
                        :length="numberOfPages"
                        circle
                        @input="nextPage"
                ></v-pagination>
            </div>
        </v-container>
        <v-container v-else >
            <v-card
            >
                <v-card-title>WEB SEARCH ENGINE</v-card-title>
                <v-divider></v-divider>
                <v-card-text>This project is built in vuejs and nodejs server. It is based on elasticsearch web Engine</v-card-text>
                <v-card-actions>
                    <v-container>
                        <v-img src="/search_engines.png" sizes="50"></v-img>
                    </v-container>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-card>
    
</template>

<script src="./lib/documentsListComponent.mvc.js"></script>

<style src="./lib/documentsListComponent.css" scoped></style>