<template>
    <div>
        <v-row>
            <v-img
                    v-if="page.image_src !== 'unknown'"
                    :src="imageUrl"
                    max-width="100%"
                    max-height="500"
            ></v-img>
            <v-img v-else
                    src="https://picsum.photos/id/11/500/300"
                    lazy-src="https://picsum.photos/id/11/10/6"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-width="100%"
                    max-height="300"
            ></v-img>
        </v-row>
        <v-row>
            <v-container>
                <v-row justify="space-around">
                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-card>
                            <v-card-title>{{page.name}}</v-card-title>
                            <v-card-subtitle v-if="page.type_cuisine !== 'unknown'">{{page.type_cuisine}}</v-card-subtitle>
                            <v-divider></v-divider>
                            <v-card-text>
                                <div v-if="page.budget !== 'unknown'">
                                    <span>{{page.budget}}</span>
                                </div>
                                <div v-if="page.area_clockwise !== 'unknown'">
                                    <span>{{page.area_clockwise}}</span>
                                </div>
                                <v-container v-if="page.horaires && page.horaires.length > 0">
                                    <v-list>
                                        <v-list-group
                                                prepend-icon="mdi-clock"
                                                value="true"
                                        >
                                            <template v-slot:activator>
                                                <v-list-item-title>HORAIRES</v-list-item-title>
                                            </template>

                                            <v-list-group
                                                    v-for="(horaire, i) in page.horaires"
                                                    :key="i"
                                                    no-action
                                                    sub-group
                                                    value="true"
                                            >
                                                <template v-slot:activator>
                                                    <v-list-item-content>
                                                        <v-list-item-title>{{horaire.jour}}</v-list-item-title>
                                                    </v-list-item-content>
                                                </template>

                                                <v-list-item
                                                        v-for="(heure, i) in horaire.heures"
                                                        :key="i"
                                                        link
                                                >
                                                    <v-list-item-title >{{heure}}</v-list-item-title>
                                                </v-list-item>
                                            </v-list-group>
                                        </v-list-group>
                                    </v-list>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-card>
                            <v-card-title>Autres</v-card-title>
                            <v-card-subtitle>{{page.type}}</v-card-subtitle>
                            <v-divider></v-divider>
                            <v-card-text>
                                <div v-if="page.ambiance !== 'unknown'" class="title">
                                    <span>Ambiance </span>
                                    <span>{{page.ambiance}}</span>
                                </div>
                                <div v-if="page.description !== 'unknown'">
                                    <span>{{page.description}}</span>
                                </div>
                                <v-container v-if="page.prestations !== 'unknown'" cols="8">
                                    <v-list
                                            color="purple lighten-5"
                                            disabled
                                    >
                                        <v-subheader class="title">Prestations</v-subheader>
                                        <v-list-item
                                                v-for="(item, i) in page.prestations"
                                                :key="i"
                                        >
                                            <v-list-item-content class="mb-0 pb-0">
                                                <v-list-item-title class="body-2">{{item}} </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-card>
                            <v-card-title>Contact</v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                <div v-if="page.tel !== 'unknown'">
                                    <span class="font-weight-bold">Tel: </span>
                                    <span>{{page.tel}}</span>
                                </div>
                                <div v-if="page.address !== 'unknown'">
                                    <span class="font-weight-bold">Adresse: </span>
                                    <span>{{page.address}}</span>
                                </div>
                            </v-card-text>
                            <v-card-actions v-if="page.restaurent_site !== 'unknown'">
                                <v-row>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            color="primary"
                                            class="ma-2 white--text"
                                            :href="page.restaurent_site"
                                            target="_blank"
                                    >
                                        Site Officiel
                                        <v-icon right dark>mdi-web</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
    </div>
</template>

<script src="./lib/detailComponent.mvc.js"></script>

<style src="./lib/detailComponent.css" scoped></style>