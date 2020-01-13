<template>
    <div>
        <v-row class="mt-4" no-gutters>
            <v-col
                    cols="2"
                    md="2"
            >
                <v-card
                        class="mx-auto"
                        max-width="400"
                        tile
                >
                    <v-list rounded>
                        <v-subheader>CATEGORIES</v-subheader>
                        <v-list-item-group v-model="item" color="primary">
                            <v-list-item
                                    v-for="(taxo, i) in taxos"
                                    :key="i"
                                    @click="getPages"
                            >
                                <v-list-item-icon>
                                    <v-icon>{{iconsArray[i]}}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="taxo.categorie"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-col>
            <v-col
                    cols="12"
                    sm="8"
                    md="10"
            >
                <documents-list-component/>
            </v-col>

        </v-row>


    </div>
</template>

<script src="./lib/categoryComponent.mvc.js"></script>

<style src="./lib/categoryComponent.css" scoped></style>